import Beverage from "../Beverage";
import CondimentDecorator from "../CondimentDecorator";
import Size from "../SizeEnum";

export default class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }
  public cost(): number {
    const size = this.beverage.getSize();
    const cost = this.beverage.cost();
    switch (size) {
      case Size.TALL:
        return cost + 0.1;
      case Size.GRANDE:
        return cost + 0.2;
      case Size.VENTI:
        return cost + 0.25;
      default:
        return cost;
    }
  }
}
