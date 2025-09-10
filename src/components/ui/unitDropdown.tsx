import CheckmarkIcon from "@/assets/images/icon-checkmark.svg?react";
import ListComponent from "./listComponent";

const unitsGroupData = [
  { title: "Temperature", option1: "Celsius (°C)", option2: "Fahrenheit (°F)" },
  {
    title: "Precipitation",
    option1: "Millimeters (mm)",
    option2: "inches (in)",
  },
  { title: "Wind Speed", option1: "km/h", option2: "mph" },
];

const UnitDropdown = () => {
  return (
    <div className='px-(--spacing-100) absolute min-w-[13.375rem] top-15 rounded-xl z-30 right-0 py-(--spacing-075) border-1 border-neutral-600 bg-neutral-800'>
      <button className='text-present-7 px-(--spacing-100) py-(--spacing-150)'>
        Switch to Imperial
      </button>
      <div className='divide-y-1 divide-neutral-600'>
        <ListComponent
          data={unitsGroupData}
          renderItem={(unit, index) => (
            <div key={index}>
              <p className='text-neutral-300 text-present-8 px-(--spacing-100) py-(--spacing-150)'>
                {unit.title}
              </p>
              <button className='flex w-full justify-between items-center px-(--spacing-100) py-(--spacing-150)'>
                <span className='text-present-7'>{unit.option1}</span>
                <CheckmarkIcon />
              </button>
              <button className='flex w-full justify-between items-center px-(--spacing-100) py-(--spacing-150)'>
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
