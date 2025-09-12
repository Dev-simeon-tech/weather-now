import { useWeather } from "../context/weatherData";

type WeatherProp =
  | "temperature_2m"
  | "apparent_temperature"
  | "relative_humidity_2m"
  | "precipitation"
  | "windspeed_10m";

type UnitType = "°C" | "°F" | "km/h" | "mph" | "mm" | "inches";
type PropEndpointType = "temperature" | "windSpeed" | "precipitation";
export const formatUnit = (
  type: UnitType,
  prop: WeatherProp,
  convFunc: (val: number) => number,
  propEndpoint: PropEndpointType
) => {
  const { unitType, weatherData } = useWeather();
  return unitType[propEndpoint] === type
    ? convFunc(Number(weatherData?.current[prop] ?? 0))
    : weatherData?.current[prop] ?? 0;
};
