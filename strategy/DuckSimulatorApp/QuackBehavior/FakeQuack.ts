import QuackBehavior from "./QuackBehavior";
export default class FakeQuack implements QuackBehavior {
 quack(): void {
  console.log("Qwak");
 }
}
