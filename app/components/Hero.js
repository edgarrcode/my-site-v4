import Image from "next/image";
import TypewriterEffect from "./TypewriterEffect";

export default function Hero() {
  const taglines = [
    'Design & Code...',
    'Concept to Launch...',
    'Vision & Strategy...',
    '0 to 1...',
    '1 to 100...'
  ];

  return (
    <section className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                    <TypewriterEffect
                      texts={taglines}
                      typeSpeed={80}
                      deleteSpeed={40}
                      pauseTime={2000}
                      className="text-3xl sm:text-4xl lg:text-4xl xl:text-7xl tracking-tighter text-balance font-medium leading-tight"
                    />

                    <div className="space-y-4">
                      <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Edgar is an experienced design technologist who helps organizations achieve their business goals through the strategic implementation of digital products.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm sm:text-base font-medium">Previous Experience:</p>
                      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center lg:justify-start">
                        <Image
                          src="/indeed.svg"
                          alt="Indeed"
                          width={80}
                          height={40}
                          className="opacity-100 hover:opacity-70 transition-opacity mx-auto sm:mx-0"
                        />
                        <Image
                          src="/bazaarvoice.svg"
                          alt="Bazaarvoice"
                          width={45}
                          height={30}
                          className="opacity-100 hover:opacity-70 transition-opacity mx-auto sm:mx-0"
                        />
                        <Image
                          src="/utep.svg"
                          alt="UTEP"
                          width={45}
                          height={45}
                          className="opacity-100 hover:opacity-70 transition-opacity mx-auto sm:mx-0"
                        />
                        <Image
                          src="/gt.svg"
                          alt="Georgetown"
                          width={90}
                          height={45}
                          className="opacity-100 hover:opacity-70 transition-opacity mx-auto sm:mx-0"
                        />
                      </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative group">
                    {/* Mobile: Smaller, centered image */}
                    <div className="lg:p-20 lg:pr-0">
                      <div className="relative">
                        <Image
                          src="/edgarr.jpg"
                          alt="Edgar E. Rodriguez"
                          width={280}
                          height={320}
                          className="rounded-xl lg:rounded-lg object-cover mx-auto lg:mx-0 shadow-2xl group-hover:shadow-3xl transition-all duration-300 w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] lg:w-[400px] lg:h-[440px] xl:w-[498px] xl:h-[549px]"
                        />

                        {/* Subtle gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl lg:rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Name and title - optimized for mobile */}
                      <div className="mt-4 lg:mt-4 text-center lg:text-left">
                        <p className="text-lg sm:text-xl lg:text-lg font-medium">Edgar E. Rodriguez</p>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-base">Designer & HTML-CSS-JSer</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
}