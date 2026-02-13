import { SilverPriceResponse } from '../../types';

const BASE_URL = 'https://api.gold-api.com/price';

export const fetchSilverPrice = async (): Promise<SilverPriceResponse> => {
  const response = await fetch(`${BASE_URL}/XAG`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch silver price');
  }
  
  return response.json();
};