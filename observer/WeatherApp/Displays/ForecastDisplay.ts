import IDisplayElement from "../interfaces/IDisplayElement";
import IObserver from "../interfaces/IObserver";
import WeatherData from "../WeatherData";

export default class ForecastDisplay implements IObserver, IDisplayElement {
 private currentPressure = 29.92;
 private lastPressure!: number;
 private weatherData: WeatherData;

 constructor(weatherData: WeatherData) {
  this.weatherData = weatherData;
  weatherData.attach(this);
 }

 update(): void {
  this.lastPressure = this.currentPressure;
  this.currentPressure = this.weatherData.getPressure();

  this.display();
 }

 public display(): void {
  process.stdout.write("Forecast: ");
  if (this.currentPressure > this.lastPressure) {
   console.log("Improving weather on the way!");
  } else if (this.currentPressure === this.lastPressure) {
   console.log("More of the same");
  } else if (this.currentPressure < this.lastPressure) {
   console.log("Watch out for cooler, rainy weather");
  }
 }
}
