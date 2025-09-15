import { useState, useEffect } from "react";
import { useWeather } from "../context/weatherData";
import ListComponent from "../components/ui/listComponent";
import DaysDropdown from "../components/ui/daysDropdown";
import { format } from "date-fns";

import { weatherCodeMap } from "../utils/weatherCodeMap";
import { groupHourlyByDay } from "../utils/groupHourly";
import { cToF } from "../utils/unitsConversion";
import { filterHoursForDay } from "../utils/filterHours";
import { formatUnit } from "../utils/formatUnit";
import Skeleton from "@mui/material/Skeleton";

const HourlyForecast = () => {
  const { weatherData, isLoading, unitType } = useWeather();
  const [selectedDay, setSelectedDay] = useState("");
  const groupedHourly = weatherData
    ? groupHourlyByDay(weatherData.hourly)
    : null;

  const days = groupedHourly ? Object.keys(groupedHourly) : [];
  useEffect(() => {
    setSelectedDay(days[0]);
  }, [weatherData]);

  return (
    <section className='rounded-[20px] py-(--spacing-250) px-(--spacing-200) h-[50rem] bg-neutral-800'>
      <div className='flex justify-between items-center '>
        <h3 className='text-present-5 font-dm-sans-semiBold'>
          Hourly forecast
        </h3>
        <DaysDropdown
          days={days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          isLoading={isLoading}
        />
      </div>

      <div className='flex scrollbar-thin-thumb flex-col gap-(--spacing-200) h-[93%] overflow-auto mt-(--spacing-200)'>
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              sx={{
                bgcolor: "#302F4A",
                borderRadius: "12px",
                border: "1px solid #3C3B5E",
              }}
              variant='rectangular'
              animation='wave'
              height={"60px"}
            />
          ))
        ) : (
          <>
            {groupedHourly && selectedDay && (
              <ListComponent
                data={filterHoursForDay(
                  selectedDay,
                  groupedHourly[selectedDay]
                )}
                renderItem={(data, index) => (
                  <div
                    key={index}
                    className='py-(--spacing-150) pl-(--spacing-150) pr-(--spacing-200) rounded-lg border-1 border-neutral-600 bg-neutral-700 flex justify-between items-center'
                  >
                    <div className='flex items-center gap-1'>
                      <div className='hourly-weather-code'>
                        {weatherCodeMap[data.code]}
                      </div>
                      <p className='text-present-5'>
                        {format(new Date(data.time), "h a")}
                      </p>
                    </div>
                    <p className='text-present-7'>{`${Math.round(
                      formatUnit("°F", data.temp, cToF, "temperature", unitType)
                    )}°`}</p>
                  </div>
                )}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default HourlyForecast;
