import type { UnitTypeProps } from "../types/weatherTypes";

type UnitType = "°C" | "°F" | "km/h" | "mph" | "mm" | "inches";
type PropType = "temperature" | "windSpeed" | "precipitation";
export const formatUnit = (
  type: UnitType,
  value: number,
  convFunc: (val: number) => number,
  prop: PropType,
  unitType: UnitTypeProps
) => {
  return unitType[prop] === type ? convFunc(value) : value;
};
