import { useWeather } from "../../context/weatherData";
import { format } from "date-fns";
import { formatUnit } from "../../utils/formatUnit";
import { weatherCodeMap } from "../../utils/weatherCodeMap";

import { cToF } from "../../utils/unitsConversion";
import { kmhToMph } from "../../utils/unitsConversion";
import { mmToInch } from "../../utils/unitsConversion";

const CurrentWeather = () => {
  const { weatherData, locationData, isLoading, unitType } = useWeather();

  const currentTime = weatherData?.current.time
    ? format(new Date(weatherData.current.time), "EEEE, MMM d, yyyy")
    : "";

  const feelTemperature = formatUnit(
    "°F",
    weatherData?.current.apparent_temperature ?? 0,
    cToF,
    "temperature"
  );
  const temperature = formatUnit(
    "°F",
    weatherData?.current.temperature_2m ?? 0,
    cToF,
    "temperature"
  );
  const windSpeed = formatUnit(
    "mph",
    weatherData?.current.windspeed_10m ?? 0,
    kmhToMph,
    "windSpeed"
  );
  const precipitation = formatUnit(
    "inches",
    weatherData?.current.precipitation ?? 0,
    mmToInch,
    "precipitation"
  );

  const weatherCondition = [
    {
      title: "Feels Like",
      value: `${feelTemperature}°`,
    },
    {
      title: "Humidity",
      value: `${weatherData?.current.relative_humidity_2m}%`,
    },
    {
      title: "Wind",
      value: `${Math.floor(windSpeed)} ${
        unitType.windSpeed === "mph" ? "mph" : "km/h"
      }`,
    },
    {
      title: "Precipitation",
      value: `${Math.floor(precipitation)} ${
        unitType.precipitation === "inches" ? "inches" : "mm"
      }`,
    },
  ];

  return (
    <>
      {isLoading ? (
        <div>
          <div className='w-full mt-(--spacing-400) bg-neutral-800 flex flex-col gap-4 justify-center items-center h-[17rem] rounded-[1.25rem]'>
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
              <div className=' bg-today-small p-8 mt-(--spacing-400) bg-no-repeat bg-center rounded-[1.25rem] w-full bg-cover flex flex-col justify-between items-center'>
                <div className='text-center'>
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
                    className='bg-neutral-800 border-1 flex-1 border-neutral-600 rounded-xl p-(--spacing-250) flex flex-col gap-(--spacing-300)'
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
