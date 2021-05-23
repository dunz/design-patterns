export class Singleton {
  private readonly name: string = "";
  private readonly height: number = 0;
  private static instance: Singleton;

  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.name = "이동주";
    this.height = 178;
    Singleton.instance = this;
  }
}
