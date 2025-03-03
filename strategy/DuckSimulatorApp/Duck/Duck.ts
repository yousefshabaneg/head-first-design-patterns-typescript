import FlyBehavior from "../FlyBehavior/FlyBehavior";
import QuackBehavior from "../QuackBehavior/QuackBehavior";
export default abstract class Duck {
 protected flyBehavior!: FlyBehavior;
 protected quackBehavior!: QuackBehavior;

 constructor() {}

 setFlyBehavior(flyBehavior: FlyBehavior): void {
  this.flyBehavior = flyBehavior;
 }

 setQuackBehavior(quackBehavior: QuackBehavior): void {
  this.quackBehavior = quackBehavior;
 }

 abstract display(): void;

 performFly(): void {
  this.flyBehavior.fly();
 }

 performQuack(): void {
  this.quackBehavior.quack();
 }

 swim(): void {
  console.log("All ducks float, even decoys!");
 }
}
