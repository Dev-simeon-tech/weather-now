import { useWeather } from "../../context/weatherData";
import CheckmarkIcon from "@/assets/images/icon-checkmark.svg?react";
import ListComponent from "./listComponent";
import type { UnitTypeProps } from "../../types/weatherTypes";

type UnitGroup = {
  title: string;
  prop: keyof UnitTypeProps;
  option1: string;
  option1Unit: string;
  option2: string;
  option2Unit: string;
};
const unitsGroupData = [
  {
    title: "Temperature",
    option1: "Celsius (°C)",
    option2: "Fahrenheit (°F)",
    option1Unit: "°C",
    option2Unit: "°F",
    prop: "temperature",
  },
  {
    title: "Precipitation",
    option1: "Millimeters (mm)",
    option2: "inches (in)",
    option1Unit: "mm",
    option2Unit: "inches",
    prop: "precipitation",
  },
  {
    title: "Wind Speed",
    option1: "km/h",
    option2: "mph",
    option1Unit: "km/h",
    option2Unit: "mph",
    prop: "windSpeed",
  },
];

const UnitDropdown = () => {
  const { unitType, setUnitType } = useWeather();

  const handleGenericUnitChange = () => {
    setUnitType((prev) => ({
      generic: prev.generic === "imperial" ? "metric" : "imperial",
      temperature: prev.generic === "metric" ? "°F" : "°C",
      windSpeed: prev.generic === "metric" ? "mph" : "km/h",
      precipitation: prev.generic === "metric" ? "inches" : "mm",
    }));
  };
  const handleUnitTypeChange = (prop: string, selectedUnit: string) => {
    setUnitType((prev) => ({
      ...prev,
      [prop]: selectedUnit,
    }));
  };

  return (
    <div className='px-(--spacing-100) shadow-1 absolute w-[13.375rem] lg:w-[15rem] top-15 rounded-xl z-30 right-0 py-(--spacing-075) border-1 border-neutral-600 bg-neutral-800'>
      <button
        onClick={handleGenericUnitChange}
        className='text-present-7 w-full text-left rounded-lg md:hover:bg-neutral-700 focus-visible:rouded   px-(--spacing-100) py-(--spacing-150)'
      >
        Switch to {unitType.generic === "imperial" ? "Metric" : "Imperial"}
      </button>
      <div className='divide-y-1 divide-neutral-600'>
        <ListComponent
          data={unitsGroupData}
          renderItem={(unit: UnitGroup, index) => (
            <div key={index}>
              <p className='text-neutral-300 text-present-8 px-(--spacing-100) py-(--spacing-150)'>
                {unit.title}
              </p>

              <button
                onClick={() =>
                  handleUnitTypeChange(unit.prop, unit.option1Unit)
                }
                className={`flex w-full unit-btn justify-between mb-1 md:hover:bg-neutral-700 rounded-lg items-center px-(--spacing-100) py-(--spacing-150) ${
                  unitType[unit.prop] === unit.option1Unit ? "activeUnit" : ""
                }`}
              >
                <span className='text-present-7'>{unit.option1}</span>
                <CheckmarkIcon />
              </button>

              <button
                onClick={() =>
                  handleUnitTypeChange(unit.prop, unit.option2Unit)
                }
                className={`flex w-full unit-btn justify-between md:hover:bg-neutral-700 rounded-lg mb-1 items-center px-(--spacing-100) py-(--spacing-150) ${
                  unitType[unit.prop] === unit.option2Unit ? "activeUnit" : ""
                }`}
              >
                <span className='text-present-7'>{unit.option2}</span>
                <CheckmarkIcon />
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default UnitDropdown;
