"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ExpandableImage({ src, alt, maxHeight = 300 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Truncated Image */}
      <div className="relative group cursor-pointer" onClick={() => setIsExpanded(true)}>
        <div 
          className="relative overflow-hidden rounded-lg"
          style={{ height: `${maxHeight}px` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Expand button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2">
              <span>View Full Image</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Full image */}
            <div className="relative w-full h-full max-h-[90vh] overflow-auto bg-white rounded-lg">
              <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}