import { useEffect, useState } from "react";
import type { LocationType } from "../types/weatherTypes";

export const useUserLocation = () => {
  const defaultLocation = { lat: 52.52437, lon: 13.41053 }; // Lagos, Nigeria
  const [userLocation, setUserLocation] =
    useState<LocationType>(defaultLocation);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          // If user denies, keep default location
          setUserLocation(defaultLocation);
        }
      );
    }
  }, []);
  return { userLocation };
};
