// Temperature
export const cToF = (c: number) => (c * 9) / 5 + 32;
export const fToC = (f: number) => ((f - 32) * 5) / 9;

// Wind speed
export const kmhToMph = (kmh: number) => kmh / 1.609;
export const mphToKmh = (mph: number) => mph * 1.609;

// Precipitation
export const mmToInch = (mm: number) => mm / 25.4;
export const inchToMm = (inch: number) => inch * 25.4;
