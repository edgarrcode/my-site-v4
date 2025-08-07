import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    return (
        <nav className="p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className='hover:underline'>
                        <Image
                            src="/edgarr.svg"
                            alt="Next.js logo"
                            width={30}
                            height={30}
                            className="hover:opacity-80"
                            />
                    </Link>
                </li>
                <li>
                    <Link href="/about" className='hover:underline'>About</Link>
                </li>
                <li>
                    <Link href="/work/utep-home-page" className='hover:underline'>UTEP Home Page</Link>
                </li>
                <li>
                    <Link href="/work/utep-academic-programs-platform" className='hover:underline'>Academic Programs</Link>
                </li>
            </ul>
        </nav>  
    );
}