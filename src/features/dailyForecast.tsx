import { useWeather } from "../context/weatherData";
import ListComponent from "../components/ui/listComponent";
import { format } from "date-fns";
import Skeleton from "@mui/material/Skeleton";

import { formatUnit } from "../utils/formatUnit";
import { cToF } from "../utils/unitsConversion";
import { weatherCodeMap } from "../utils/weatherCodeMap";

const DailyForcast = () => {
  const { weatherData, isLoading, unitType } = useWeather();

  return (
    <div className='mt-(--spacing-400)'>
      <h3 className='text-present-5 font-dm-sans-semiBold'>Daily forecast</h3>
      <div className='mt-(--spacing-250) grid grid-cols-3 max-[320px]:grid-cols-2 md:grid-cols-7 gap-(--spacing-200)'>
        {isLoading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <Skeleton
              key={index}
              variant='rectangular'
              sx={{
                bgcolor: "#262540",
                borderRadius: "12px",
                border: "1px solid #3C3B5E",
              }}
              animation='wave'
              width={"100%"}
              height={165}
            />
          ))
        ) : (
          <>
            {weatherData && (
              <ListComponent
                data={weatherData?.daily.time}
                renderItem={(data, index) => (
                  <div
                    key={index}
                    className='px-(--spacing-125) py-(--spacing-200) border-1 border-neutral-600 bg-neutral-800 rounded-xl flex justify-between flex-col gap-(--spacing-200)'
                  >
                    <p className='text-center text-present-6'>
                      {format(new Date(data), "EEE")}
                    </p>

                    <div className='daily-weather-icon'>
                      {weatherCodeMap[weatherData.daily.weathercode[index]]}
                    </div>

                    <div className='flex justify-between text-present-7'>
                      <p>
                        {`${Math.floor(
                          formatUnit(
                            "°F",
                            weatherData?.daily.temperature_2m_max[index],
                            cToF,
                            "temperature",
                            unitType
                          )
                        )}°`}
                      </p>
                      <p>
                        {`${Math.floor(
                          formatUnit(
                            "°F",
                            weatherData?.daily.temperature_2m_min[index],
                            cToF,
                            "temperature",
                            unitType
                          )
                        )}°`}
                      </p>
                    </div>
                  </div>
                )}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DailyForcast;
