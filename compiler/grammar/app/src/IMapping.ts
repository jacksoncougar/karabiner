import { IApplicationCondition, ICondition } from "./ICondition";

export interface IMapping {
  from: string;
  to: string;
  conditions?:(ICondition | IApplicationCondition)[]
}


