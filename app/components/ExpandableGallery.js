"use client";
// components/ExpandableGallery.js
import { useState } from 'react';
import Image from 'next/image';

function ExpandableGallery({ 
  images, 
  title = "Screenshots", 
  className = "" 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          ) : (
            <>
              <span>View Full Images</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      </div>
      
      {isExpanded ? (
        // Full images view - stacked vertically for full detail
        <div className="grid gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-gray-800">
              <div className="relative h-80 sm:h-96 lg:h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt || `Screenshot ${index + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {image.caption && (
                <div className="p-4">
                  <h4 className="text-white font-medium mb-2">
                    {image.alt || `Screenshot ${index + 1}`}
                  </h4>
                  <p className="text-gray-300 text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Collapsed view - 3 columns showing previews
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-300"
                 onClick={() => setIsExpanded(true)}>
              <div className="relative h-48 sm:h-56">
                <Image
                  src={image.src}
                  alt={image.alt || `Screenshot ${index + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-medium">
                  {image.alt || `Screenshot ${index + 1}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// THIS IS CRUCIAL - Make sure you have this export
export default ExpandableGallery;