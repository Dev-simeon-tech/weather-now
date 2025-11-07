import { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "../api/geocoding";
import { useDebounce } from "../hooks/useDebounce";

type GeocodingContextType = {
  geocodeResult: GeocodeResultsType | null;
  setGeocodeResult: React.Dispatch<
    React.SetStateAction<GeocodeResultsType | null>
  >;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isFetching: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  enabled?: boolean;
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
  isFetching: false,
  setEnabled: () => {},
  enabled: true,
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
  const [enabled, setEnabled] = useState(true);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, isFetching } = useQuery({
    queryKey: ["geocode", debouncedSearchQuery],
    queryFn: () => searchLocation(debouncedSearchQuery),
    refetchOnWindowFocus: false,
    enabled: debouncedSearchQuery.length > 0 && enabled,
  });
  useEffect(() => {
    if (data) {
      setGeocodeResult(data);
    }
  }, [data]);

  const value = {
    setGeocodeResult,
    geocodeResult,
    searchQuery,
    setSearchQuery,
    isFetching,
    setEnabled,
    enabled,
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
