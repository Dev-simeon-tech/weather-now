import { createContext, useState } from "react";

type GeocodingContextType = {
  geocodeResult: GeocodeResultsType;
  setGeocodeResult: React.Dispatch<React.SetStateAction<GeocodeResultsType>>;
};

export type GeocodeResultsType = {
  results: {
    latitude: number;
    longitude: number;
    name: string;
    country: string;
  }[];
};
export const GeocodingContext = createContext({} as GeocodingContextType);

export const GeocodingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [geocodeResult, setGeocodeResult] = useState<GeocodeResultsType>({
    results: [],
  });

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
