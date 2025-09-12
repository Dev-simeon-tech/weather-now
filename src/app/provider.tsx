import { BrowserRouter } from "react-router";
import { GeocodingContextProvider } from "../context/geocodeData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherContextProvider } from "../context/weatherData";

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GeocodingContextProvider>
          <WeatherContextProvider>{children}</WeatherContextProvider>
        </GeocodingContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default AppProvider;
