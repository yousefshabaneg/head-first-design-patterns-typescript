import Size from "./SizeEnum";

export default abstract class Beverage {
  size: Size = Size.TALL;
  description: string = "Unknown Beverage";

  public getDescription(): string {
    return this.description;
  }

  public setSize(size: Size) {
    this.size = size;
  }
  public getSize(): Size {
    return this.size;
  }

  public abstract cost(): number;
}
