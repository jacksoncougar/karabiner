// @ts-nocheck

import {
  ConfigContext,
  Create_named_layerContext,
  Create_named_setContext,
  Extends_statementContext,
  Global_statementContext,
  Has_statementContext,
  Is_statementContext,
  Layer_blockContext,
  Layer_statementContext,
  Layer_statementsContext,
  Set_blockContext,
  Set_statementContext,
  Set_statementsContext,
  Toggle_statementContext,
} from "./antlr/KLLParser";

import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { IMapping } from "./IMapping";
import { KLLVisitor } from "./antlr/KLLVisitor";
import { Layer } from "./Layer";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ToggleMeta } from "./ToggleMeta";
import { compile } from "antlr4-tool";

function isLayer(object: any): object is LayerMeta {
  return object && "toggles" in object;
}

function isSet(object: any): object is SetMeta {
  return !isLayer(object);
}
class SymbolTable {
  scopes: Scope[];

  constructor() {
    this.scopes = [];
    this.scopes.push({
      symbols: [{ name: "nothing", sets: [], toggles: [] }],
    });
    this.scopes.push(new Scope());
  }

  get nothing(): LayerMeta {
    if (isLayer(this.scopes[0].symbols[0])) {
      return this.scopes[0].symbols[0];
    }
  }

  get top(): Scope {
    return this.scopes[this.scopes.length - 1];
  }
}

class Scope {
  symbols: (LayerMeta | SetMeta)[] = [];
}

class SetMeta {
  name: string;
  mappings: IMapping[];
}

interface LayerMeta {
  name: string;
  sets: string[];
  parent?: string;
  toggles: ToggleMeta[];
}

export class SetVisitor
  extends AbstractParseTreeVisitor<IMapping[]>
  implements KLLVisitor<IMapping[]> {
  protected defaultResult(): IMapping[] {
    return undefined;
  }

  aggregateResult(result: IMapping[], next: IMapping[]) {
    if (result) return [...result, ...next];
    else return next;
  }

  visitIs_statement(ctx: Is_statementContext) {
    const map: IMapping = {
      from: ctx.children[0].text,
      to: ctx.children[2].text,
    };
    return [map];
  }
}

export class SetBlockVisitor
  extends AbstractParseTreeVisitor<SetMeta>
  implements KLLVisitor<SetMeta> {
  meta: SetMeta = new SetMeta();

  protected defaultResult(): SetMeta {
    return this.meta;
  }

  visitCreate_named_set(ctx: Create_named_setContext) {
    this.meta.name = ctx.children[3].text;
  }

  visitSet_statements(ctx: Set_statementsContext) {
    this.meta.mappings = new SetVisitor().visitChildren(ctx);
  }
}

export class LayerBlockVisitor
  extends AbstractParseTreeVisitor<LayerMeta>
  implements KLLVisitor<LayerMeta> {
  meta: LayerMeta = { name: "", sets: [], toggles: [] };

  protected defaultResult(): IMapping[] {
    return this.meta;
  }

  visitToggle_statement(ctx: Toggle_statementContext) {
    this.meta.toggles.push({
      key: ctx.children[0].text,
      layer: ctx.children[2].text,
    });
  }

  visitHas_statement(ctx: Has_statementContext) {
    this.meta.sets.push(ctx.children[1].text);
  }

  visitExtends_statement(ctx: Extends_statementContext) {
    if (ctx.children[1].text != "nothing")
      this.meta.parent = ctx.children[1].text;
  }

  visitCreate_named_layer(ctx: Create_named_layerContext) {
    this.meta.name = ctx.children[3].text;
  }
}

export class LayerSynthesisVisitor
  extends AbstractParseTreeVisitor<Layer[]>
  implements KLLVisitor<Layer[]> {
  constructor(private symbolTable: SymbolTable) {
    super();
  }

  layers: Layer[] = [];

  protected defaultResult(): string {
    return this.layers;
  }

  visitConfig(ctx: ConfigContext) {
    this.layers.push({
      name: "nothing",
      toggles: this.symbolTable.nothing.toggles,
    });

    let findParent = (parent: string): LayerMeta => {
      return this.symbolTable.scopes
        .flatMap((scopes) => scopes.symbols)
        .filter(
          (symbol): symbol is LayerMeta =>
            isLayer(symbol) && symbol.name == parent
        )[0];
    };

    let getConditions = (layer: LayerMeta): string[] => {
      if (layer.parent) {
        return [...getConditions(findParent(layer.parent)), layer.name];
      } else if (layer.name === "nothing") return [];
      else return [layer.name];
    };

    let getMappings = (set: string): IMapping[] => {
      const result = this.symbolTable.scopes
        .flatMap((scopes) => scopes.symbols)
        .filter(
          (symbol): symbol is SetMeta => isSet(symbol) && symbol.name == set
        )[0];
      return result?.mappings ?? [];
    };

    this.layers = this.symbolTable.scopes
      .flatMap((scopes) => scopes.symbols)
      .filter((symbol): symbol is LayerMeta => isLayer(symbol))
      .map((layer) => {
        return {
          name: layer.name,
          toggles: layer.toggles,
          conditions: getConditions(layer),
          mappings: layer.sets.flatMap((set) => getMappings(set)),
        };
      });
    return this.layers;
  }
}

export class myKLLVisitor
  extends AbstractParseTreeVisitor<SymbolTable>
  implements KLLVisitor<SymbolTable> {
  symbolTable: SymbolTable = new SymbolTable();

  protected defaultResult(): string {
    return this.symbolTable;
  }

  // todo: top level is statements

  visitToggle_statement(ctx: Toggle_statementContext) {
    this.symbolTable.nothing.toggles.push({
      key: ctx.children[0].text,
      layer: ctx.children[2].text,
    });
  }

  visitLayer_block(ctx: Layer_blockContext) {
    this.symbolTable.top.symbols.push(new LayerBlockVisitor().visit(ctx));
  }

  visitSet_block(ctx: Set_blockContext) {
    this.symbolTable.top.symbols.push(new SetBlockVisitor().visit(ctx));
  }
}
