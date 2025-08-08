import Image from "next/image";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
            <div className="font-texturina text-2xl bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                <Image
                    src="/edgarr.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="inline-block mr-2"
                />
                edgarr
            </div>
            <div className="hidden md:flex items-center space-x-8 bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700/50">
                <a href="#home" className="text-sm text-gray-300 hover:text-violet-400 transition-colors">Home</a>
                <a href="#work" className="text-sm text-gray-300 hover:text-violet-400 transition-colors">Work</a>
                <a href="#about" className="text-sm text-gray-300 hover:text-violet-400 transition-colors">About</a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-violet-400 transition-colors">Contact</a>
            </div>
            <button className="md:hidden p-2 rounded-lg bg-gray-800/80 backdrop-blur-md border border-gray-700/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>
  );
}
