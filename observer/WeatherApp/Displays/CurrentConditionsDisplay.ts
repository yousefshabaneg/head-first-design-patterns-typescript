import IDisplayElement from "../interfaces/IDisplayElement";
import IObserver from "../interfaces/IObserver";
import WeatherData from "../WeatherData";

export default class CurrentConditionsDisplay
 implements IDisplayElement, IObserver
{
 private temperature!: number;
 private humidity!: number;
 private weatherData: WeatherData;

 constructor(weatherData: WeatherData) {
  this.weatherData = weatherData;
  weatherData.attach(this);
 }

 update(): void {
  this.temperature = this.weatherData.getTemperature();
  this.humidity = this.weatherData.getHumidity();
  this.display();
 }

 display(): void {
  console.log(
   `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
  );
 }
}
