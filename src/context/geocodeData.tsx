import { createContext, useState, useContext } from "react";

type GeocodingContextType = {
  geocodeResult: GeocodeResultsType | null;
  setGeocodeResult: React.Dispatch<
    React.SetStateAction<GeocodeResultsType | null>
  >;
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
});

export const GeocodingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [geocodeResult, setGeocodeResult] = useState<GeocodeResultsType | null>(
    null
  );

  const value = {
    setGeocodeResult,
    geocodeResult,
  };
  return (
    <GeocodingContext.Provider value={value}>
      {children}
    </GeocodingContext.Provider>
  );
};
export const useGeoding = () => {
  const ctx = useContext(GeocodingContext);
  if (!ctx) throw new Error("useWeather must be used within WeatherProvider");
  return ctx;
};
