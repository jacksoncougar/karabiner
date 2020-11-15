import { IMapping } from "./IMapping";
import { Layer } from "./Layer";
import { Toggle_statementContext } from "./antlr/KLLParser";

export class KarabinerCompiler {
  compile(layers: Layer[]): string {
    let rules = {
      rules: layers.flatMap((layer) => {
        let toggles = [];
        let mappings = [];
        if (layer.toggles) {
          toggles = layer.toggles.map((toggle) => {
            return new ToggleRule(toggle.key, toggle.layer, layer.conditions);
          });
        }
        if (layer.mappings) {
          mappings = layer.mappings.map((mapping) => {
            return new MappingRule(layer.name, mapping, layer.conditions);
          });
        }
        return [...toggles, ...mappings];
      }),
    };
    return JSON.stringify(rules, null, 2);
  }
}

interface Condition {
  name: string;
  type: "variable_if";
  value: number;
}

interface From {
  key_code: string;
  modifiers: {
    optional: ["any"];
  };
}

interface To {
  key_code: string;
}

interface SetVariable {
  name: string;
  value: number;
}

class ToggleRule {
  constructor(key: string, layer: string, conditions: string[]) {
    this.description = `${key} toggles ${layer}`;
    this.manipulators.from = {
      key_code: key,
      modifiers: { optional: ["any"] },
    };
    this.manipulators.to = { name: layer, value: 1 };
    this.manipulators.to_after_key_up = { name: layer, value: 0 };
    this.manipulators.conditions = conditions.map((condition) => {
      return { name: condition, type: "variable_if", value: 1 };
    });
  }
  description: string;
  manipulators: {
    type: "basic";
    conditions: Condition[];
    from?: From;
    to?: SetVariable;
    to_after_key_up?: SetVariable;
  } = {
    type: "basic",
    conditions: [],
  };
}

class MappingRule {
  constructor(layer: string, mapping: IMapping, conditions: string[]) {
    this.description = `${layer}: ${mapping.from} is ${mapping.to}`;
    this.manipulators.conditions = conditions.map((condition: string) => {
      return { name: condition, type: "variable_if", value: 1 };
    });
    this.manipulators.from = {
      key_code: mapping.from,
      modifiers: { optional: ["any"] },
    };
    this.manipulators.to = [{ key_code: mapping.to }];
  }
  description: string;
  manipulators: {
    type: "basic";
    conditions: Condition[];
    from?: From;
    to?: To[];
  } = {
    type: "basic",
    conditions: [],
  };
}
