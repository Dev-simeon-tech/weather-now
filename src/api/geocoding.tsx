import axios from "axios";
import type { GeocodeResultsType } from "../context/geocodeData";

export const searchLocation = async (
  name: string
): Promise<GeocodeResultsType> => {
  console.log("fetched data");
  const response = await axios.get<GeocodeResultsType>(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: {
        name,
        count: 5,
      },
    }
  );
  return response.data;
};
