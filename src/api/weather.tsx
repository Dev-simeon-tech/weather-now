import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export type WeatherDataType = {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    windspeed_10m: number;
    weathercode: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    apparent_temperature: number[];
    relative_humidity_2m: number[];
    precipitation: number[];
    weathercode: number[];
  };
  daily: {
    time: string[];
    temperature_2m_max: number;
    temperature_2m_min: number;
    precipitation_sum: number;
    weathercode: number;
  };
};

export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherDataType> => {
  console.log("fetched");
  const response = await axios.get<WeatherDataType>(BASE_URL, {
    params: {
      latitude,
      longitude,
      current:
        "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m,weathercode",
      hourly:
        "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weathercode",
      daily:
        "temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode",
      timezone: "auto",
      temperature_unit: "celsius",
      windspeed_unit: "kmh",
      precipitation_unit: "mm",
    },
  });

  return response.data;
};
