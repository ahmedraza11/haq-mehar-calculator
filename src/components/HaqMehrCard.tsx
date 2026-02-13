import React from 'react';
import { HaqMehrData } from '../../types';
import { RefreshCw } from 'lucide-react';

interface HaqMehrCardProps {
  data: HaqMehrData;
  isRefetching: boolean;
  onRefresh: () => void;
}

export const HaqMehrCard: React.FC<HaqMehrCardProps> = ({ data, isRefetching, onRefresh }) => {
  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Top Details Section */}
      <div className="p-6 sm:p-8 bg-gray-50/50">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center text-gray-600">
            <span>Total Silver (10 Dirhams)</span>
            <span className="font-semibold text-gray-900">29.75 grams</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Weight of 1 Dirham</span>
            <span className="font-semibold text-gray-900">2.975 grams</span>
          </div>
          
          <div className="border-t border-gray-200 my-2"></div>

          <div className="flex justify-between items-center text-gray-600">
            <span>Silver Price (Ounce)</span>
            <span className="font-semibold text-gray-900">{formatCurrency(data.silverPriceOunceUSD, 'USD')}</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Silver Price (Gram)</span>
            <span className="font-semibold text-gray-900">{formatCurrency(data.silverPriceGramUSD, 'USD')}</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>USD to PKR Rate</span>
            <span className="font-semibold text-gray-900">1 USD = {data.usdToPkrRate.toFixed(2)} PKR</span>
          </div>
        </div>
      </div>

      {/* Main Results Section */}
      <div className="p-6 sm:p-8 space-y-8">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
            Minimum Haq Mehr (USD)
          </h3>
          <p className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {formatCurrency(data.haqMehrUSD, 'USD')}
          </p>
        </div>

        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-400">Converted</span>
            </div>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-1">
            Minimum Haq Mehr (PKR)
          </h3>
          <p className="text-4xl sm:text-5xl font-bold text-emerald-600 tracking-tight">
            {formatCurrency(data.haqMehrPKR, 'PKR')}
          </p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Last updated: {data.lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <button
          onClick={onRefresh}
          disabled={isRefetching}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${isRefetching 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 shadow-md hover:shadow-lg'
            }
          `}
        >
          <RefreshCw size={16} className={isRefetching ? 'animate-spin' : ''} />
          {isRefetching ? 'Updating...' : 'Refresh'}
        </button>
      </div>
    </div>
  );
};