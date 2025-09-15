import { useGeocode } from "../context/geocodeData";
import SearchInput from "../components/ui/searchInput";
import SearchButton from "../components/ui/searchButton";

const SearchForm = () => {
  const { searchQuery, setSearchQuery, setGeocodeResult, refetch, isFetching } =
    useGeocode();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return setGeocodeResult(null);
    const result = await refetch();
    if (result.data) {
      setGeocodeResult(result.data);
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
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchForm;
