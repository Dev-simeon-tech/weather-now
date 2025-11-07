import SearchIcon from "@/assets/images/icon-search.svg?react";
import SearchDropdown from "./searchDropdown";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isFetching: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchInput = ({
  searchValue,
  setSearchValue,
  isFetching,
  setEnabled,
}: SearchInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnabled(true);
    setSearchValue(e.target.value);
  };

  return (
    <div
      tabIndex={0}
      className='w-full relative flex items-center rounded-xl text-present-5 gap-(--spacing-200) md:hover:bg-neutral-700 bg-neutral-800  py-(--spacing-200) px-(--spacing-200)'
    >
      <SearchIcon />
      <input
        placeholder='Search for a city e.g new york...'
        className='w-full focus-visible:outline-none  text-neutral-200'
        type='text'
        onChange={handleInputChange}
        value={searchValue}
      />
      <SearchDropdown loading={isFetching} />
    </div>
  );
};

export default SearchInput;
