import { useGeocode } from "../../context/geocodeData";
import { useWeather } from "../../context/weatherData";

import Navbar from "../../components/ui/navbar";
import ApiErrorLayout from "../../components/layout/apiErrorLayout";
import SearchForm from "../../features/searchForm";
import CurrentWeather from "../../features/currentWeather";
import DailyForcast from "../../features/dailyForecast";
import HourlyForecast from "../../features/hourlyForecast";
import WeatherDashboard from "../../components/layout/weatherDashboard";

const Home = () => {
  const { geocodeResult } = useGeocode();
  const { isError, refetch } = useWeather();

  if (isError) {
    return (
      <div className='min-h-screen lg:pt-(--spacing-600) 2xl:px-(--spacing-1400) lg:px-(--spacing-600) px-(--spacing-200) pt-(--spacing-200) lg:pb-(--spacing-1000) pb-(--spacing-600)'>
        <Navbar />
        <ApiErrorLayout refetch={refetch} />
      </div>
    );
  }

  return (
    <div className='min-h-screen lg:pt-(--spacing-600) 2xl:px-(--spacing-1400) lg:px-(--spacing-600) px-(--spacing-200) pt-(--spacing-200) lg:pb-(--spacing-1000) pb-(--spacing-600) '>
      <Navbar />
      <main>
        <h1 className='font-bricolage text-center my-(--spacing-800) text-5xl md:text-present-2'>
          How’s the sky looking today?
        </h1>
        <SearchForm />
        {geocodeResult?.results === undefined && geocodeResult !== null ? (
          <h2 className='text-present-4 text-center mt-(--spacing-600) font-dm-sans-bold'>
            No search result found!
          </h2>
        ) : (
          <WeatherDashboard>
            <div className='lg:flex flex-col justify-between'>
              <CurrentWeather />
              <DailyForcast />
            </div>
            <HourlyForecast />
          </WeatherDashboard>
        )}
      </main>
    </div>
  );
};

export default Home;
