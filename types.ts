export interface SilverPriceResponse {
  timestamp: number;
  metal: string;
  currency: string;
  exchange: string;
  symbol: string;
  prev_close_price: number;
  open_price: number;
  low_price: number;
  high_price: number;
  open_time: number;
  price: number;
  ch: number;
  chp: number;
  ask: number;
  bid: number;
}

export interface ExchangeRateResponse {
  provider: string;
  WARNING_UPGRADE_TO_V6: string;
  terms: string;
  base: string;
  date: string;
  time_last_updated: number;
  rates: Record<string, number>;
}

export interface HaqMehrData {
  silverPriceOunceUSD: number;
  silverPriceGramUSD: number;
  usdToPkrRate: number;
  haqMehrUSD: number;
  haqMehrPKR: number;
  lastUpdated: Date;
}

export interface HaqMehrState {
  data: HaqMehrData | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isRefetching: boolean;
}