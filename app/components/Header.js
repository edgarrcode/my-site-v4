import Image from "next/image";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    
                    <span className="font-sans">edgar e. rodriguez</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300">Work</a>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  );
}
