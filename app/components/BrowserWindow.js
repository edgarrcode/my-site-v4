import React from 'react';

const BrowserWindow = ({ children, url = "https://yourwebsite.com" }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
      {/* Title Bar */}
      <div className="bg-gray-100 px-2 sm:px-4 py-3 flex items-center justify-between border-b border-gray-200">
        {/* Traffic Lights */}
        <div className="flex space-x-1.5 sm:space-x-2 flex-shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        
        {/* Address Bar */}
        <div className="flex-1 mx-2 sm:mx-4 min-w-0 overflow-hidden">
          <div className="bg-white rounded-md px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 border border-gray-300 overflow-hidden">
            <div className="truncate">🔒 {url}</div>
          </div>
        </div>
        
        {/* Right side placeholder */}
        <div className="w-8 sm:w-16 flex-shrink-0"></div>
      </div>
      
      {/* Content Area */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
};
export default BrowserWindow;