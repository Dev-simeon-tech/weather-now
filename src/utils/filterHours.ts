export function filterHoursForDay(
  day: string, // e.g. "2025-09-19"
  hours: { time: string; temp: number; code: number }[]
) {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date());

  if (day !== today) {
    // Future day → return all hours
    return hours;
  }

  // If today → only keep remaining hours
  const now = new Date();
  return hours.filter((h) => new Date(h.time) >= now);
}
