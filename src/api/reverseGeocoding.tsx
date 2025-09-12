export async function getCityFromCoords(lat: number, lon: number) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}
