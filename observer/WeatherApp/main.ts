import CurrentConditionsDisplay from "./Displays/CurrentConditionsDisplay";
import ForecastDisplay from "./Displays/ForecastDisplay";
import { HeatIndexDisplay } from "./Displays/HeatIndexDisplay";
import { StatisticsDisplay } from "./Displays/StatisticsDisplay";
import WeatherData from "./WeatherData";

const weatherData: WeatherData = new WeatherData();

const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(
 weatherData
);

const statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay: ForecastDisplay = new ForecastDisplay(weatherData);
const heatIndexDisplay: HeatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
