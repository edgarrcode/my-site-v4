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
    <section className="min-h-[75vh] flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">

                    <TypewriterEffect
                      texts={taglines}
                      typeSpeed={80}
                      deleteSpeed={40}
                      pauseTime={2000}
                      className="text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-7xl"
                    />
                    <p className="">Edgar is an experienced design technologist who helps organizations achieve their business goals through the strategic implementation of digital products.</p>
                    <p className="">Previous Experience:</p>
                    <div className="flex flex-col sm:flex-row gap-12">
                      <Image
                        src="/indeed.svg"
                        alt="Indeed"
                        width={90}
                        height={60}
                        className=""
                      />
                      <Image
                        src="/bazaarvoice.svg"
                        alt="Bazaarvoice"
                        width={50}
                        height={30}
                        className=""
                      />
                      <Image
                        src="/utep.svg"
                        alt="UTEP"
                        width={50}
                        height={100}
                        className=""
                      />
                      <Image
                        src="/gt.svg"
                        alt="George Town"
                        width={100}
                        height={100}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="p-20">
                    <div className="">
                      <Image
                        src="/edgarr.jpg"
                        alt="Edgar E. Rodriguez"
                        width={498}
                        height={549}
                        className="rounded-lg object-cover"
                      />
                      <p className="mt-4 text-lg">Edgar E. Rodriguez</p>
                      <p className="text-gray-400">Design Technologist</p>
                    </div>
                  </div>
            </div>
        </div>
    </section>
  );
}