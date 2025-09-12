import { createContext, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/weather";
import { getCityFromCoords } from "../api/reverseGeocoding";

import type {
  LocationType,
  UnitTypeProps,
  WeatherContextProps,
} from "../types/weatherTypes";

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
  const [unitType, setUnitType] = useState<UnitTypeProps>({
    generic: "metric",
    temperature: "°C",
    windSpeed: "km/h",
    precipitation: "mm",
  });
  const { data: locationData, isLoading: loadingLocation } = useQuery({
    queryKey: ["location", location],
    queryFn: () => getCityFromCoords(location.lat, location.lon),
    refetchOnWindowFocus: false,
  });

  const {
    data: weatherData,
    isLoading: loadingWeather,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => getWeather(location.lat, location.lon),
    refetchOnWindowFocus: false,
  });
  const isLoading = loadingLocation || loadingWeather;
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
