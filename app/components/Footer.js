import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-20 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2012-2025 edgarr.com. All rights reserved.</p>
                <p>
                    <Link href="mailto:hi@edgarr.com" className="text-blue-400 hover:underline">hola@edgarr.com</Link>
                    {" | "}
                    <Link href="https://github.com/edgarrcode" className="text-blue-400 hover:underline">GitHub</Link>
                    {" | "}
                    <Link href="https://www.linkedin.com/in/edgarrod/" className="text-blue-400 hover:underline">LinkedIn</Link> 
                    {" | "}
                    <Link href="https://www.instagram.com/edgarr_com/" className="text-blue-400 hover:underline">Instagram</Link>
                </p>
            </div>
        </footer>
    );
}