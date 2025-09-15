export function groupHourlyByDay(hourly: {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
}) {
  const grouped: Record<
    string,
    { time: string; temp: number; code: number }[]
  > = {};

  hourly.time.forEach((iso, i) => {
    const date = new Date(iso);
    const day = new Intl.DateTimeFormat("en-US", {
      weekday: "long", // "Mon", "Tue", etc.
    }).format(date);

    if (!grouped[day]) grouped[day] = [];

    grouped[day].push({
      time: iso,
      temp: hourly.temperature_2m[i],
      code: hourly.weathercode[i],
    });
  });

  return grouped;
}
