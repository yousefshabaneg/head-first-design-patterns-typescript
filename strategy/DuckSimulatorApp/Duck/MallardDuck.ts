import Duck from "./Duck";
import Quack from "../QuackBehavior/Quack";
import FlyWithWings from "../FlyBehavior/FlyWithWings";
export default class MallardDuck extends Duck {
 constructor() {
  super();
  this.quackBehavior = new Quack();
  this.flyBehavior = new FlyWithWings();
 }

 display(): void {
  console.log("I'm a real Mallard duck");
 }
}
