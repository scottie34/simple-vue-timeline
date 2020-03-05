export class Control {
  method?: string | undefined;
  icon?: string | undefined;

  constructor(method?: string | undefined, icon?: string | undefined) {
    this.method = method;
    this.icon = icon;
  }
}
