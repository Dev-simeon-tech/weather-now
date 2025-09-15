import sunnyIcon from "@/assets/images/icon-sunny.webp";
import cloudyIcon from "@/assets/images/icon-sunny.webp";
import overCastIcon from "@/assets/images/icon-overcast.webp";
import fogIcon from "@/assets/images/icon-fog.webp";
import drizzeleIcon from "@/assets/images/icon-drizzle.webp";
import rainIcon from "@/assets/images/icon-rain.webp";
import snowIcon from "@/assets/images/icon-snow.webp";
import thunderstormIcon from "@/assets/images/icon-storm.webp";

export const weatherCodeMap: Record<number, string | React.ReactNode> = {
  0: <img src={sunnyIcon} alt='Sunny' />,
  1: <img src={sunnyIcon} alt='mainly clear' />,
  2: <img src={cloudyIcon} alt='Partly Cloudy' />,
  3: <img src={overCastIcon} alt='overCast' />,
  45: <img src={fogIcon} alt='fog' />,
  48: <img src={fogIcon} alt='rime fog' />,
  51: <img src={drizzeleIcon} alt='light drizzle' />,
  53: <img src={drizzeleIcon} alt='moderate drizzle' />,
  55: <img src={drizzeleIcon} alt='dense drizzle' />,
  61: <img src={rainIcon} alt='slight rain' />,
  63: <img src={rainIcon} alt='moderate rain' />,
  65: <img src={rainIcon} alt='heavy rain' />,
  71: <img src={snowIcon} alt='slight snow' />,
  73: <img src={snowIcon} alt='moderate snow' />,
  75: <img src={snowIcon} alt='heavy snow' />,
  80: <img src={rainIcon} alt='slight rain showers' />,
  81: <img src={rainIcon} alt='moderate rain showers' />,
  82: <img src={rainIcon} alt='voilent rain showers' />,
  95: <img src={thunderstormIcon} alt='thunderstorm' />,
  96: <img src={thunderstormIcon} alt='thunderstorm with hail' />,
  99: <img src={thunderstormIcon} alt='heavy thunderstorm with hail' />,
};
