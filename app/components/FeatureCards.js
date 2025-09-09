'use client';
import React from 'react';
import Image from 'next/image';

const FeatureCards = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        
        {/* Container with horizontal scroll for lg and below */}
        <div className="overflow-x-auto lg:overflow-x-auto 2xl:overflow-x-visible scrollbar-hide">
          {/* Grid container */}
          <div className="grid grid-cols-4 gap-6 min-w-max lg:min-w-max 2xl:min-w-0">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 h-[600px] w-[366px] 2xl:w-auto flex flex-col">
              <p className="text-sm font-medium mb-2 opacity-80">Prospective Students</p>
              <h2 className="text-2xl font-bold leading-tight mb-4">Discovering possibilities.</h2>
              <div className="flex-1 relative rounded-lg overflow-hidden">
                <Image 
                  src="/projects/ap/featured1.png" 
                  alt="Students studying" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg h-[600px] w-[366px] 2xl:w-auto relative overflow-hidden">
              <Image 
                src="/projects/ap/featured2.png" 
                alt="Inspiration" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 right-0 z-20 p-6 text-white">
                <p className="text-sm font-medium mb-2 opacity-90">Academic Programs</p>
                <h2 className="text-2xl font-bold leading-tight mb-4">Accessible to Everyone.</h2>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 h-[600px] w-[366px] 2xl:w-auto flex flex-col">
              <p className="text-sm font-medium mb-2 opacity-90">Alumni Stories</p>
              <h2 className="text-2xl font-bold leading-tight mb-4">Real Stories, Real Success.</h2>
              <div className="flex-1 relative rounded-lg overflow-hidden">
                <Image 
                  src="/projects/ap/featured3.png" 
                  alt="Students studying" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg h-[600px] w-[366px] 2xl:w-auto relative overflow-hidden">
              <Image 
                src="/projects/ap/featured4.jpg" 
                alt="Inspiration" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 right-0 z-20 p-6 text-white">
                <p className="text-sm font-medium mb-2 opacity-90">Inspiration</p>
                <h2 className="text-2xl font-bold leading-tight">For an Incredible Life and Career</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Add this style tag to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default FeatureCards;