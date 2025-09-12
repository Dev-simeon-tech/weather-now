import { useWeather } from "../../context/weatherData";
import { format } from "date-fns";

import { weatherCodeMap } from "../../utils/weatherCodeMap";

const CurrentWeather = () => {
  const { weatherData, locationData } = useWeather();
  const currentTime = weatherData?.current.time
    ? format(new Date(weatherData.current.time), "EEEE, MMM d, yyyy")
    : "";

  return (
    <>
      {weatherData && locationData && (
        <div className=' bg-today-small p-8 mt-(--spacing-400) bg-no-repeat bg-center rounded-[1.25rem] w-full bg-cover flex flex-col justify-between items-center'>
          <div>
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
              {`${Math.round(weatherData.current.temperature_2m)}°`}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
