import { useWeather } from "../../context/weatherData";
import ListComponent from "./listComponent";
import { format } from "date-fns";

import { formatUnit } from "../../utils/formatUnit";
import { cToF } from "../../utils/unitsConversion";
import { weatherCodeMap } from "../../utils/weatherCodeMap";

const DailyForcast = () => {
  const { weatherData } = useWeather();

  return (
    <div className='mt-(--spacing-400)'>
      <h3 className='text-present-5 font-dm-sans-semiBold'>Daily forecast</h3>
      <div className='mt-(--spacing-250) grid grid-cols-3 gap-(--spacing-200)'>
        {weatherData && (
          <ListComponent
            data={weatherData?.daily.time}
            renderItem={(data, index) => (
              <div className='px-(--spacing-125) py-(--spacing-200) border-1 border-neutral-600 bg-neutral-800 rounded-xl flex justify-between flex-col gap-(--spacing-200)'>
                <p className='text-center text-present-6'>
                  {format(new Date(data), "EEE")}
                </p>

                <div className='text-6xl daily-weather-icon text-center'>
                  {weatherCodeMap[weatherData.daily.weathercode[index]]}
                </div>

                <div className='flex justify-between text-present-7'>
                  <p>
                    {`${Math.floor(
                      formatUnit(
                        "°F",
                        weatherData?.daily.temperature_2m_max[index],
                        cToF,
                        "temperature"
                      )
                    )}°`}
                  </p>
                  <p>
                    {`${Math.floor(
                      formatUnit(
                        "°F",
                        weatherData?.daily.temperature_2m_min[index],
                        cToF,
                        "temperature"
                      )
                    )}°`}
                  </p>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default DailyForcast;
