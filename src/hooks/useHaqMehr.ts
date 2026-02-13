import { useQuery } from '@tanstack/react-query';
import { fetchSilverPrice } from '../services/metalsApi';
import { fetchExchangeRate } from '../services/currencyApi';
import { HaqMehrState } from '../../types';
import { useCallback } from 'react';

// Constants
const TROY_OUNCE_IN_GRAMS = 31.1035;
const HAQ_MEHR_GRAMS = 29.75; // 10 Dirhams weight in silver

export const useHaqMehr = (): HaqMehrState => {
  // Fetch Silver Price
  const silverQuery = useQuery({
    queryKey: ['silverPrice'],
    queryFn: fetchSilverPrice,
  });

  // Fetch Exchange Rate
  const currencyQuery = useQuery({
    queryKey: ['exchangeRate'],
    queryFn: fetchExchangeRate,
  });

  const isLoading = silverQuery.isLoading || currencyQuery.isLoading;
  const isError = silverQuery.isError || currencyQuery.isError;
  const isRefetching = silverQuery.isRefetching || currencyQuery.isRefetching;
  
  // Combine errors
  const error = silverQuery.error || currencyQuery.error;

  const refetch = useCallback(() => {
    silverQuery.refetch();
    currencyQuery.refetch();
  }, [silverQuery, currencyQuery]);

  let data = null;

  if (silverQuery.data && currencyQuery.data) {
    const silverPriceOunceUSD = silverQuery.data.price;
    const usdToPkrRate = currencyQuery.data.rates['PKR'];
    
    // Calculations
    const silverPriceGramUSD = silverPriceOunceUSD / TROY_OUNCE_IN_GRAMS;
    const haqMehrUSD = silverPriceGramUSD * HAQ_MEHR_GRAMS;
    const haqMehrPKR = haqMehrUSD * usdToPkrRate;

    data = {
      silverPriceOunceUSD,
      silverPriceGramUSD,
      usdToPkrRate,
      haqMehrUSD,
      haqMehrPKR,
      lastUpdated: new Date()
    };
  }

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching
  };
};