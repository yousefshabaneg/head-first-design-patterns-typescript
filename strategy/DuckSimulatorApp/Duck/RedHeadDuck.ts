import Duck from "./Duck";
import FlyWithWings from "../FlyBehavior/FlyWithWings";
import Quack from "../QuackBehavior/Quack";
export default class RedHeadDuck extends Duck {
 constructor() {
  super();
  this.flyBehavior = new FlyWithWings();
  this.quackBehavior = new Quack();
 }

 display(): void {
  console.log("I'm a real Red Headed duck");
 }
}
