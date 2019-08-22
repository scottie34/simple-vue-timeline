export interface IControl {
  method?: string;
  icon?: string;
}

export class Control implements IControl {
  constructor(public method?: string, public icon?: string) {}
}
