import React from 'react';

const BrowserWindow = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-neutral-600">
      {/* Title Bar */}
      <div className="bg-gray-100 dark:bg-neutral-800 px-4 py-3 flex items-center border-b border-gray-200 dark:border-neutral-600">
        {/* Traffic Lights */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      {/* Content Area */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;