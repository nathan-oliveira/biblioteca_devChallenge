export default class ResponseClass {
  public error: boolean;
  public msg: any;
  public dados: any;

  constructor() {
    this.error = false;
    this.msg = null;
    this.dados = null;
  }
}