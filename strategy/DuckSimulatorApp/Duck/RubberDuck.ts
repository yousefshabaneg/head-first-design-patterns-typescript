import Duck from "./Duck";
import FlyNoWay from "../FlyBehavior/FlyNoWay";
import Squeak from "../QuackBehavior/Squeak";

export default class RubberDuck extends Duck {
 constructor() {
  super();
  this.flyBehavior = new FlyNoWay();
  this.quackBehavior = new Squeak();
 }

 display(): void {
  console.log("I'm a rubber duckie");
 }
}
