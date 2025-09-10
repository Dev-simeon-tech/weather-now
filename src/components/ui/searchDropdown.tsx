import { useContext } from "react";
import { GeocodingContext } from "../../context/geocodeData";
import ListComponent from "./listComponent";

const SearchDropdown = () => {
  const { geocodeResult } = useContext(GeocodingContext);
  return (
    <>
      {geocodeResult.results.length !== 0 && (
        <div className='w-full flex-col flex absolute bg-neutral-800 border-1 p-(--spacing-100) rounded-xl border-neutral-700'>
          <ListComponent
            data={geocodeResult?.results}
            renderItem={(result, index) => (
              <button
                className='text-left px-(--spacing-100) hover:bg-neutral-700 border-1 border-transparent rounded-lg hover:border-neutral-600  py-(--spacing-125)'
                key={index}
              >
                <p>
                  {result.name}, {result.country}
                </p>
              </button>
            )}
          />
        </div>
      )}
    </>
  );
};

export default SearchDropdown;
