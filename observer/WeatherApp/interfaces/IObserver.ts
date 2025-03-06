export default interface IObserver {
 //Push
 //  update(temp: number, humidity: number, pressure: number): void;

 //Pull
 update(): void;
}
