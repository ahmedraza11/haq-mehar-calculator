import React from 'react';
import { useHaqMehr } from './src/hooks/useHaqMehr';
import { Loader } from './src/components/Loader';
import { Header } from './src/components/Header';
import { Footer } from './src/components/Footer';
import { HaqMehrCard } from './src/components/HaqMehrCard';

function App() {
  const { data, isLoading, isError, error, refetch, isRefetching } = useHaqMehr();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-50 text-slate-900">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        
        <Header />

        <main className="w-full">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <div className="w-full max-w-md mx-auto bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-red-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-1">Unable to fetch data</h3>
              <p className="text-red-600 text-sm mb-4">
                {error?.message || "Please check your internet connection and try again."}
              </p>
              <button 
                onClick={refetch}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : data ? (
            <HaqMehrCard 
              data={data} 
              isRefetching={isRefetching} 
              onRefresh={refetch} 
            />
          ) : null}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;