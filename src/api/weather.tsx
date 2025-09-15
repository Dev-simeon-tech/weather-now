import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

import type { WeatherDataType } from "../types/weatherTypes";

export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherDataType> => {
  const response = await axios.get<WeatherDataType>(BASE_URL, {
    params: {
      latitude,
      longitude,
      current:
        "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m,weathercode",
      hourly: "temperature_2m,weathercode",
      daily: "temperature_2m_max,temperature_2m_min,weathercode",
      timezone: "auto",
      temperature_unit: "celsius",
      windspeed_unit: "kmh",
      precipitation_unit: "mm",
    },
  });

  return response.data;
};
