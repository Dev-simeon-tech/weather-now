import { useGeocode } from "../context/geocodeData";
import { useWeather } from "../context/weatherData";
import SearchInput from "../components/ui/searchInput";
import SearchButton from "../components/ui/searchButton";

const SearchForm = () => {
  const {
    searchQuery,
    setSearchQuery,
    setGeocodeResult,
    isFetching,
    geocodeResult,
    setEnabled,
  } = useGeocode();
  const { setLocation } = useWeather();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery) return;
    const selectedResult = geocodeResult?.results.find(
      (result) =>
        `${result.name}, ${result.country}`.toLowerCase() ===
        searchQuery.toLowerCase()
    );

    if (selectedResult) {
      setLocation({
        lat: selectedResult.latitude,
        lon: selectedResult.longitude,
      });
      setGeocodeResult(null);
    }
  };

  return (
    <div className='lg:w-[42rem] mx-auto'>
      <form
        className='md:flex gap-(--spacing-200) items-center'
        onSubmit={handleSubmit}
      >
        <SearchInput
          isFetching={isFetching}
          setSearchValue={setSearchQuery}
          searchValue={searchQuery}
          setEnabled={setEnabled}
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchForm;
