import { ExchangeRateResponse } from '../../types';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

export const fetchExchangeRate = async (): Promise<ExchangeRateResponse> => {
  const response = await fetch(`${BASE_URL}/USD`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch exchange rates');
  }
  
  return response.json();
};