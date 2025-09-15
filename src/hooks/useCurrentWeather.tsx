import { useWeather } from "../context/weatherData";
import { cToF, kmhToMph, mmToInch } from "../utils/unitsConversion";
import { formatUnit } from "../utils/formatUnit";

const useCurrentWeather = () => {
  const { weatherData, unitType } = useWeather();
  const feelTemperature = formatUnit(
    "°F",
    weatherData?.current.apparent_temperature ?? 0,
    cToF,
    "temperature",
    unitType
  );

  const windSpeed = formatUnit(
    "mph",
    weatherData?.current.windspeed_10m ?? 0,
    kmhToMph,
    "windSpeed",
    unitType
  );
  const precipitation = formatUnit(
    "inches",
    weatherData?.current.precipitation ?? 0,
    mmToInch,
    "precipitation",
    unitType
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
  return { weatherCondition };
};

export default useCurrentWeather;
