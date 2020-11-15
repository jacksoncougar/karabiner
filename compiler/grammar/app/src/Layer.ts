import { IMapping } from "./IMapping";
import { ToggleMeta } from "./ToggleMeta";

export class Layer {
  name: string;
  mappings: IMapping[] = [];
  conditions: string[] = [];
  toggles: ToggleMeta[] = [];
}
