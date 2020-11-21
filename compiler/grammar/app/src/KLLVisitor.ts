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
  Layer_headerContext,
  Layer_statementContext,
  Layer_statementsContext,
  Set_blockContext,
  Set_statementContext,
  Set_statementsContext,
  Swap_statementContext,
  Toggle_statementContext,
  When_statementContext,
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
import { ICondition } from "./ICondition";

function isLayer(object: any): object is LayerMeta {
  return object && "toggles" in object;
}

class SymbolTable {
  scopes: Scope[];

  constructor() {
    this.scopes = [];
    this.scopes.push({
      symbols: [
        { name: "nothing", toggles: [] },
        { name: "keyboard", toggles: [], mappings: [] },
      ],
    });
    this.scopes.push(new Scope());
  }

  get nothing(): LayerMeta {
    return this.scopes[0].symbols[0];
  }

  get keyboard(): LayerMeta {
    return this.scopes[0].symbols[1];
  }

  get top(): Scope {
    return this.scopes[this.scopes.length - 1];
  }
}

class Scope {
  symbols: LayerMeta[] = [];
}

class LayerMeta {
  name: string;
  mappings: IMapping[] = [];
  parent?: string;
  toggles: ToggleMeta[] = [];
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
    if (!ctx) return;
    const map: IMapping = {
      from: ctx?.children?.[0]?.text,
      to: ctx?.children?.[2]?.text,
    };
    return [map];
  }
}

export class LayerBlockVisitor
  extends AbstractParseTreeVisitor<LayerMeta>
  implements KLLVisitor<LayerMeta> {
  meta: LayerMeta = new LayerMeta();

  protected defaultResult(): IMapping[] {
    return this.meta;
  }

  visitToggle_statement(ctx: Toggle_statementContext) {
    if (!ctx) return;
    this.meta.toggles.push({
      key: ctx?.children[3]?.text,
      layer: ctx?.children[1]?.text,
    });
  }

  visitIs_statement(ctx: Is_statementContext) {
    if (!ctx) return;
    const map: IMapping = {
      from: ctx?.children?.[0]?.text,
      to: ctx?.children?.[2]?.text,
    };
    this.meta.mappings.push(map);
  }

  visitExtends_statement(ctx: Extends_statementContext) {
    if (!ctx) return;
    if (ctx.children[1].text != "nothing")
      this.meta.parent = ctx?.children[1]?.text;
  }

  visitLayer_header(ctx: Layer_headerContext) {
    if (!ctx) return;
    this.meta.name = ctx?.children?.[0]?.text;
    this.visitChildren(ctx);
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

    let getConditions = (layer: LayerMeta): string[] => {
      if (!layer) return [];
      else if (layer?.name === "keyboard" || layer?.name === "nothing")
        return [];
      else
        return [
          ...getConditions(
            this.symbolTable.scopes[1].symbols.find(
              (x) => x.name === layer.parent
            )
          ),
          layer.name,
        ];
    };

    this.layers = this.symbolTable.scopes
      .flatMap((scopes) => scopes.symbols)
      .filter((symbol): symbol is LayerMeta => isLayer(symbol))
      .map((layer) => {
        return {
          name: layer.name,
          toggles: layer.toggles,
          conditions: getConditions(layer),
          mappings: layer.mappings,
        };
      });
    return this.layers;
  }
}

export class ConditionVisitor
  extends AbstractParseTreeVisitor<IApplicationCondition[]>
  implements KLLVisitor<SymbolTable> {
  condition: IApplicationCondition[] = [];

  protected defaultResult(): string {
    return this.condition;
  }

  aggregateResult(result: IApplicationCondition[], next: IApplicationCondition[]) {
    if (result) return [...result, ...next];
    else return next;
  }

  visitWhen_statement(ctx: When_statementContext) {
    return [
      { type: "frontmost_application_if", bundle: ctx.children[2].text },
    ];
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
    this.symbolTable.keyboard.toggles.push({
      key: ctx?.children[3]?.text,
      layer: ctx?.children[1]?.text,
    });
  }

  visitSwap_statement(ctx: Swap_statementContext) {
    if (!ctx) return;
    const from = ctx?.children?.[1]?.text;
    const to = ctx?.children?.[3]?.text;

    const conditions = new ConditionVisitor().visit(ctx);

    this.symbolTable.keyboard.mappings.push({ from, to, conditions });
    this.symbolTable.keyboard.mappings.push({ from: to, to: from, conditions });
  }

  visitWhen_statement(ctx: When_statementContext) {}

  visitIs_statement(ctx: Is_statementContext) {
    if (!ctx) return;
    const map: IMapping = {
      from: ctx?.children?.[0]?.text,
      to: ctx?.children?.[2]?.text,
    };
    this.symbolTable.keyboard.mappings.push(map);
  }

  visitLayer_block(ctx: Layer_blockContext) {
    this.symbolTable.top.symbols.push(new LayerBlockVisitor().visit(ctx));
  }

  visitSet_block(ctx: Set_blockContext) {
    this.symbolTable.top.symbols.push(new SetBlockVisitor().visit(ctx));
  }
}
