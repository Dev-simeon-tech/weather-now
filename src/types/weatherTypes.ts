export type LocationType = {
  lat: number;
  lon: number;
};

export type LocationDataType = {
  city: string;
  countryName: string;
};

export type UnitTypeProps = {
  generic: "metric" | "imperial";
  temperature: "°C" | "°F";
  windSpeed: "km/h" | "mph";
  precipitation: "mm" | "inches";
};

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
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
};

export type WeatherContextProps = {
  weatherData: WeatherDataType | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  unitType: UnitTypeProps;
  setUnitType: React.Dispatch<React.SetStateAction<UnitTypeProps>>;
  location: LocationType;
  setLocation: (loc: LocationType) => void;
  locationData: LocationDataType;
};
