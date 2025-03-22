import Beverage from "./Beverage";
import Size from "./SizeEnum";

export default abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage;
  public abstract getDescription(): string;
  public getSize(): Size {
    return this.beverage.getSize();
  }
}
