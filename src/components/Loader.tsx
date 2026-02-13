import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-6 mx-auto"></div>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>

      <div className="space-y-6 pt-4 border-t border-gray-100">
        <div className="text-center">
          <div className="h-3 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
        <div className="text-center">
          <div className="h-3 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
         <div className="h-8 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
  );
};