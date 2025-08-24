'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <nav className="max-w-[400px] mx-auto p-4 z-50 text-black max-sm:py-4 py-3 bg-[#147b44]">
            <div className=" ">
                {/* Logo */}
                <div className="text-2xl font-bold ">
                    <Link href="/" className='text-yellow-300 text-[20px] flex items-center justify-center'>
                       Fashion Forward
                    </Link>
                </div>

        
            </div>

            {/* Mobile Menu (Slide In from Left) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
                </div>

                <ul className="flex flex-col gap-4 p-6 text-lg">
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/">হোম</Link>
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/packages">প্যাকেজ</Link>
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/demos">ডেমো</Link>
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/contact">যোগাযোগ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

