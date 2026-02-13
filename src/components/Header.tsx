import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="inline-block p-3 rounded-full bg-emerald-50 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-emerald-600"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
        Haq Mehr Calculator
      </h1>
      <p className="text-gray-500 font-medium">
        Based on real-time silver price (Fiqh Hanafi)
      </p>
    </header>
  );
};