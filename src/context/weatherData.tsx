import { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/weather";
import { getCityFromCoords } from "../api/reverseGeocoding";
import { useUserLocation } from "../hooks/useUserLocation";

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
  const { userLocation } = useUserLocation();
  const [location, setLocation] = useState<LocationType>({
    lat: 52.52437,
    lon: 13.41053,
  });
  const [unitType, setUnitType] = useState<UnitTypeProps>({
    generic: "metric",
    temperature: "°C",
    windSpeed: "km/h",
    precipitation: "mm",
  });
  useEffect(() => {
    setLocation(userLocation);
  }, [userLocation]);

  const {
    data: locationData,
    isLoading: loadingLocation,
    isError: errorLocation,
    refetch: refetchLocation,
  } = useQuery({
    queryKey: ["location", location],
    queryFn: () => getCityFromCoords(location.lat, location.lon),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const {
    data: weatherData,
    isLoading: loadingWeather,
    isError: errorWeather,
    refetch: refetchWeather,
  } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => getWeather(location.lat, location.lon),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const isLoading = loadingLocation || loadingWeather;
  const isError = errorLocation || errorWeather;
  const refetch = () => {
    refetchLocation();
    refetchWeather();
  };
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
