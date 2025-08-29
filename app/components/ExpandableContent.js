"use client";
import { useState, useRef, useEffect } from 'react';

function ExpandableContent({ 
  children, 
  maxHeight = 300, 
  className = "",
  showButton = true,
  expandText = "Show More",
  collapseText = "Show Less",
  title = "Title",
  showTitle = true
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if content is taller than maxHeight
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setShouldShowButton(contentHeight > maxHeight);
    }
  }, [maxHeight, children]);

  return (
    <div className={className}>
      {/* Expand/Collapse button at top */}
      {shouldShowButton && showButton && (
        <div className="flex justify-between items-center mb-4">
          {showTitle && (
            <div><p>{title}</p></div>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <span>{isExpanded ? collapseText : expandText}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      <div className="relative">
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-none' : ''
          }`}
          style={!isExpanded ? { maxHeight: `${maxHeight}px` } : {}}
        >
          {children}
        </div>
        
        {/* Gradient overlay when collapsed */}
        {!isExpanded && shouldShowButton && (
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-neutral-900 via-neutral-900/0 to-transparent pointer-events-none border-b border-solid border-neutral-700" />
        )}
      </div>
    </div>
  );
}

export default ExpandableContent;