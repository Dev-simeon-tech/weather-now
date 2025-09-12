import { createContext, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import type { WeatherDataType } from "../api/weather";
import { getWeather } from "../api/weather";
import { getCityFromCoords } from "../api/reverseGeocoding";

type LocationType = {
  lat: number;
  lon: number;
};
type LocationDataType = {
  city: string;
  countryName: string;
};
type WeatherContextProps = {
  weatherData: WeatherDataType | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  unitType: "metric" | "imperial";
  setUnitType: (u: "metric" | "imperial") => void;
  location: LocationType;
  setLocation: (loc: LocationType) => void;
  locationData: LocationDataType;
};
export const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState<LocationType>({
    lat: 6.5244,
    lon: 3.3792,
  });
  const [unitType, setUnitType] = useState<"metric" | "imperial">("metric");
  const { data: locationData } = useQuery({
    queryKey: ["location", location],
    queryFn: () => getCityFromCoords(location.lat, location.lon),
    refetchOnWindowFocus: false,
  });

  const {
    data: weatherData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => getWeather(location.lat, location.lon),
    refetchOnWindowFocus: false,
  });

  const value = {
    weatherData,
    location,
    setLocation,
    unitType,
    setUnitType,
    isError,
    refetch,
    isLoading,
    locationData,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx) throw new Error("useWeather must be used within WeatherProvider");
  return ctx;
};
