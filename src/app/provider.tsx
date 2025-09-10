import { BrowserRouter } from "react-router";
import { GeocodingContextProvider } from "../context/geocodeData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GeocodingContextProvider>{children}</GeocodingContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default AppProvider;
