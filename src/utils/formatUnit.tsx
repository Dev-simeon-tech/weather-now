import { useWeather } from "../context/weatherData";

type UnitType = "°C" | "°F" | "km/h" | "mph" | "mm" | "inches";
type PropType = "temperature" | "windSpeed" | "precipitation";
export const formatUnit = (
  type: UnitType,
  value: number,
  convFunc: (val: number) => number,
  prop: PropType
) => {
  const { unitType } = useWeather();
  return unitType[prop] === type ? convFunc(value) : value;
};
