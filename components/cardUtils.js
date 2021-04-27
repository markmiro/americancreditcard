export function dinarsToUsd(dinars) {
  if (!dinars) return 0;
  return dinars / 180;
}

export function usdToDinars(usd) {
  if (!usd) return 0;
  return usd * 180;
}

export const CARD_PRICE_DINARS = 2500;
// Math.ceil() to round up since that's the safer rounding to make
// since this is the amount people would be paying
export const CARD_PRICE_USD = Math.ceil(dinarsToUsd(CARD_PRICE_DINARS));

// $2 minimum to load on the card
export const MIN_USD = 2;
export const MIN_DINARS = usdToDinars(MIN_USD);

export const MONTHLY_COST_USD = 0.49;
