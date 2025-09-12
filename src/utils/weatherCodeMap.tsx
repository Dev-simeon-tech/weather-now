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
  1: "🌤️",
  2: <img src={cloudyIcon} alt='Partly Cloudy' />,
  3: <img src={overCastIcon} alt='overCast' />,
  45: <img src={fogIcon} alt='fog' />,
  48: <img src={fogIcon} alt='rime fog' />,
  51: "🌦️",
  53: "🌦️",
  55: <img src={drizzeleIcon} alt='drizzle' />,
  61: <img src={rainIcon} alt='rain' />,
  63: <img src={rainIcon} alt='overCast' />,
  65: "⛈️",
  71: <img src={snowIcon} alt='snow' />,
  73: <img src={snowIcon} alt='snow' />,
  75: <img src={snowIcon} alt='snow' />,
  80: "🌦️",
  81: "🌦️",
  82: "⛈️",
  95: <img src={thunderstormIcon} alt='thunderstorm' />,
  96: <img src={thunderstormIcon} alt='thunderstorm' />,
  99: <img src={thunderstormIcon} alt='thunderstorm' />,
};
