import IDisplayElement from "../interfaces/IDisplayElement";
import IObserver from "../interfaces/IObserver";
import WeatherData from "../WeatherData";

export class StatisticsDisplay implements IObserver, IDisplayElement {
 private maxTemp: number = 0.0;
 private minTemp: number = 200;
 private tempSum: number = 0.0;
 private numReadings: number = 0;
 private weatherData: WeatherData;

 constructor(weatherData: WeatherData) {
  this.weatherData = weatherData;
  weatherData.attach(this);
 }

 update(): void {
  const temp = this.weatherData.getTemperature();
  this.tempSum += temp;
  this.numReadings++;

  if (temp > this.maxTemp) {
   this.maxTemp = temp;
  }

  if (temp < this.minTemp) {
   this.minTemp = temp;
  }

  this.display();
 }

 display(): void {
  console.log(
   `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
    this.maxTemp
   }/${this.minTemp}`
  );
 }
}
