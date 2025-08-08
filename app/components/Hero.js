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
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-sm text-gray-400">Available for work</span>
                    </div>
                    <TypewriterEffect
                      texts={taglines}
                      typeSpeed={80}
                      deleteSpeed={40}
                      pauseTime={2000}
                      className="text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-7xl"
                    />
                    <p className="font-mono">Edgar is an experienced design technologist who helps organizations achieve their business goals through the strategic implementation of digital products.</p>
                    <p className="font">Previous Experience:</p>
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
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                          <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                  <div className="text-3xl font-bold text-white">150+</div>
                                  <div className="text-sm text-gray-400 mt-2">Projects Completed</div>
                              </div>
                              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                  <div className="text-3xl font-bold text-white">8+</div>
                                  <div className="text-sm text-gray-400 mt-2">Years Experience</div>
                              </div>
                              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                  <div className="text-3xl font-bold text-white">50+</div>
                                  <div className="text-sm text-gray-400 mt-2">Happy Clients</div>
                              </div>
                              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                  <div className="text-3xl font-bold text-white">12</div>
                                  <div className="text-sm text-gray-400 mt-2">Design Awards</div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  );
}