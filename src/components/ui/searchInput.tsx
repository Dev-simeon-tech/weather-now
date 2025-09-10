import SearchIcon from "@/assets/images/icon-search.svg?react";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
  return (
    <div className='w-full flex items-center rounded-xl text-present-5 gap-(--spacing-200) bg-neutral-800  py-(--spacing-200) px-(--spacing-200)'>
      <SearchIcon />
      <input
        placeholder='Search for a place...'
        className='w-full focus-visible:outline-none text-neutral-200'
        type='text'
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </div>
  );
};

export default SearchInput;
