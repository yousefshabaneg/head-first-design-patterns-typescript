import IObserver from "./IObserver";
import ISubject from "./ISubject";

export default abstract class Observable implements ISubject {
 private _observers: IObserver[] = [];

 attach(observer: IObserver): void {
  const isExist = this._observers.includes(observer);
  if (isExist) {
   return;
  }
  this._observers.push(observer);
 }

 detach(observer: IObserver): void {
  const index = this._observers.indexOf(observer);
  if (index === -1) {
   return;
  }
  this._observers.splice(index, 1);
 }

 notify(): void {
  for (const observer of this._observers) {
   observer.update();
  }
 }
}
