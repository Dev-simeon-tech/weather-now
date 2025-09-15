import { useWeather } from "../context/weatherData";
import { format } from "date-fns";
import { formatUnit } from "../utils/formatUnit";
import { weatherCodeMap } from "../utils/weatherCodeMap";
import useCurrentWeather from "../hooks/useCurrentWeather";

import { cToF } from "../utils/unitsConversion";

const CurrentWeather = () => {
  const { weatherData, locationData, isLoading, unitType } = useWeather();
  const { weatherCondition } = useCurrentWeather();

  const currentTime = weatherData?.current.time
    ? format(new Date(weatherData.current.time), "EEEE, MMM d, yyyy")
    : "";

  const temperature = formatUnit(
    "°F",
    weatherData?.current.temperature_2m ?? 0,
    cToF,
    "temperature",
    unitType
  );

  return (
    <>
      {isLoading ? (
        <div>
          <div className='w-full bg-neutral-800 flex flex-col gap-4 justify-center items-center h-[17rem] rounded-[1.25rem]'>
            <div className='dot-loader'></div>
            <p className='text-neutral-200 text-present-6'>Loading...</p>
          </div>
          <div className='flex flex-wrap gap-(--spacing-200) mt-(--spacing-250)'>
            {weatherCondition.map((condition, index) => (
              <div
                key={index}
                className='bg-neutral-800 border-1 flex-1 border-neutral-600 rounded-xl p-(--spacing-250) justify-between flex flex-col gap-(--spacing-300)'
              >
                <h3 className='text-present-6 text-neutral-200'>
                  {condition.title}
                </h3>
                <p className='text-present-3 font-dm-sans-light'>_</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {weatherData && locationData && (
            <section>
              <div className=' bg-today py-(--spacing-1000) px-(--spacing-300) mt-(--spacing-400) bg-no-repeat bg-center rounded-[1.25rem] w-full bg-cover flex flex-col md:flex-row justify-between items-center'>
                <div className='text-center md:text-left flex flex-col gap-(--spacing-150)'>
                  <h2 className='text-present-4 font-dm-sans-bold'>
                    {locationData.city}, {locationData.countryName}
                  </h2>
                  <p className='text-present-6'>{currentTime}</p>
                </div>
                <div className='flex items-center gap-2 current-weather'>
                  <div className='text-6xl'>
                    {weatherCodeMap[weatherData.current.weathercode]}
                  </div>
                  <h2 className='text-present-1 font-dm-sans-italic'>
                    {`${Math.round(temperature)}°`}
                  </h2>
                </div>
              </div>
              {/* weather condition section */}
              <div className='flex flex-wrap gap-(--spacing-200) mt-(--spacing-250)'>
                {weatherCondition.map((condition, index) => (
                  <div
                    key={index}
                    className='bg-neutral-800 border-1 border-neutral-600 flex-1 rounded-xl p-(--spacing-250) md:min-w-auto min-w-[40%] flex flex-col justify-between gap-(--spacing-300)'
                  >
                    <h3 className='text-present-6 text-neutral-200'>
                      {condition.title}
                    </h3>
                    <p className='text-present-3 font-dm-sans-light'>
                      {condition.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default CurrentWeather;
