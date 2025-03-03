import Duck from "./Duck";
import FlyNoWay from "../FlyBehavior/FlyNoWay";
import Quack from "../QuackBehavior/Quack";
export default class ModelDuck extends Duck {
 constructor() {
  super();
  this.flyBehavior = new FlyNoWay();
  this.quackBehavior = new Quack();
 }

 display(): void {
  console.log("I'm a model duck");
 }
}
