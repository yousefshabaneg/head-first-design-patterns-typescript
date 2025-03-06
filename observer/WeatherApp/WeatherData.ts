import IObserver from "./interfaces/IObserver";
import Observable from "./interfaces/Observable";

export default class WeatherData extends Observable {
 private temperature: number = 0;
 private humidity: number = 0;
 private pressure: number = 0;

 setMeasurements(temp: number, humidity: number, pressure: number) {
  this.temperature = temp;
  this.humidity = humidity;
  this.pressure = pressure;
  this.measurementsChanged();
 }

 measurementsChanged() {
  this.notify();
 }

 getTemperature() {
  return this.temperature;
 }

 getHumidity() {
  return this.humidity;
 }

 getPressure() {
  return this.pressure;
 }
}
