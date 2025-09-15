import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "../api/geocoding";
import { GeocodingContext } from "../context/geocodeData";

import SearchInput from "../components/ui/searchInput";
import SearchButton from "../components/ui/searchButton";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setGeocodeResult } = useContext(GeocodingContext);

  const { refetch, isFetching } = useQuery({
    queryKey: ["geocode", searchQuery],
    queryFn: () => searchLocation(searchQuery),
    refetchOnWindowFocus: false,
    enabled: false, // run manually
  });

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
