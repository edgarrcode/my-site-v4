import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full p-6">
        <div className="">
            <div className="flex justify-between items-center">
                <div className="">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-100">
                        <span className="">edgarr.com</span>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-100">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-400 transition-colors duration-100">
                        About
                    </Link>
                    <a href="https://www.linkedin.com/in/edgarrod/" className="hover:text-gray-400 transition-colors duration-100" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
    </nav>
  );
}