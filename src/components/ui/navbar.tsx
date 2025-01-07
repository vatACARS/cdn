import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full px-12 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl' : 'bg-transparent'
                } border-b border-zinc-800/50`}>
                <div className="container mx-auto px-4">
                    <div className="h-16 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <Link href="/">
                                <div className="flex space-x-4 items-center">
                                    <div className="relative w-8 h-8">
                                        <Image
                                            src="/img/vatacars-logo-sm-dark.png"
                                            alt="vatACARS Logo"
                                            fill
                                            priority
                                            className="object-contain hover:opacity-80 transition-opacity"
                                        />
                                    </div>
                                    <span className="text-2xl font-semibold">CDN</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/admin">
                                <button className="cursor-pointer py-1 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200">
                                    Admin Panel
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}