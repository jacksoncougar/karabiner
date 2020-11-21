

export interface ICondition {
  type: 'variable_if';
  name: string;
  value: 0;
}

export interface IApplicationCondition {
  type: 'frontmost_application_if';
  bundle: string;
}
