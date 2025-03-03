import Duck from "./Duck";
import FlyNoWay from "../FlyBehavior/FlyNoWay";
import MuteQuack from "../QuackBehavior/MuteQuack";
export default class DecoyDuck extends Duck {
 constructor() {
  super();
  this.setFlyBehavior(new FlyNoWay());
  this.setQuackBehavior(new MuteQuack());
 }

 display(): void {
  console.log("I'm a duck Decoy");
 }
}
