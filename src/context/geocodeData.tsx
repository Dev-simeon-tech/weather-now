import { createContext, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "../api/geocoding";

type GeocodingContextType = {
  geocodeResult: GeocodeResultsType | null;
  setGeocodeResult: React.Dispatch<
    React.SetStateAction<GeocodeResultsType | null>
  >;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  refetch: () => Promise<any>;
  isFetching: boolean;
};
export type GeocodeType = {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
};
export type GeocodeResultsType = {
  results: {
    latitude: number;
    longitude: number;
    name: string;
    country: string;
  }[];
};
export const GeocodingContext = createContext<GeocodingContextType>({
  geocodeResult: null,
  setGeocodeResult: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  refetch: () => {
    return Promise.resolve();
  },
  isFetching: false,
});

export const GeocodingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [geocodeResult, setGeocodeResult] = useState<GeocodeResultsType | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const { refetch, isFetching } = useQuery({
    queryKey: ["geocode", searchQuery],
    queryFn: () => searchLocation(searchQuery),
    refetchOnWindowFocus: false,
    enabled: false, // run manually
  });

  const value = {
    setGeocodeResult,
    geocodeResult,
    searchQuery,
    setSearchQuery,
    refetch,
    isFetching,
  };
  return (
    <GeocodingContext.Provider value={value}>
      {children}
    </GeocodingContext.Provider>
  );
};
export const useGeocode = () => {
  const ctx = useContext(GeocodingContext);
  if (!ctx) throw new Error("useWeather must be used within WeatherProvider");
  return ctx;
};
