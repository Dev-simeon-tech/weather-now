import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "../../api/geocoding";
import { GeocodingContext } from "../../context/geocodeData";

import SearchInput from "./searchInput";
import SearchButton from "./searchButton";
import SearchDropdown from "./searchDropdown";

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
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <SearchInput
          setSearchValue={setSearchQuery}
          searchValue={searchQuery}
        />
        <SearchButton />
      </form>
      <SearchDropdown loading={isFetching} />
    </div>
  );
};

export default SearchForm;
