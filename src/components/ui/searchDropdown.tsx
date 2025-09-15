import { useContext, useRef } from "react";
import { GeocodingContext } from "../../context/geocodeData";
import ListComponent from "./listComponent";
import { useWeather } from "../../context/weatherData";
import { useClickOutside } from "../../hooks/useClickOutside";

import type { GeocodeType } from "../../context/geocodeData";
import LoadingIcon from "@/assets/images/icon-loading.svg?react";

type SearchDropdownProps = {
  loading: boolean;
};

const SearchDropdown = ({ loading }: SearchDropdownProps) => {
  const { geocodeResult, setGeocodeResult } = useContext(GeocodingContext);
  const { setLocation } = useWeather();
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    setGeocodeResult(null);
  });

  const onSelect = (result: GeocodeType) => {
    setLocation({
      lat: result.latitude,
      lon: result.longitude,
    });
    setGeocodeResult(null);
  };
  return (
    <>
      {loading ? (
        <div className='flex gap-(--spacing-125) md:top-18 top-35 left-0 items-center w-full absolute  bg-neutral-800 border-1 p-(--spacing-100) rounded-xl border-neutral-700'>
          <LoadingIcon />
          <p>Search in progress</p>
        </div>
      ) : (
        <>
          {geocodeResult?.results && (
            <div
              ref={dropdownRef}
              className='w-full flex-col flex absolute top-20 left-0 bg-neutral-800 border-1 p-(--spacing-100) rounded-xl border-neutral-700'
            >
              <ListComponent
                data={geocodeResult?.results}
                renderItem={(result, index) => (
                  <button
                    onClick={() => onSelect(result)}
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
      )}
    </>
  );
};

export default SearchDropdown;
