"use client";

import { AppSettings } from '@/seed';
import { Menu, Shield, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Public Layout
 * Wraps all public-facing pages
 */

export function PublicHeaderClient() {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <Image src="/favicon.svg" alt="Logo" width={32} height={32} />
                    </div>
                    <span
                        className="text-2xl font-bold text-primary"
                    >
                        {settings.siteName}
                    </span>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/#features" className="font-medium hover:text-purple-600">Features</Link>
                    <Link href="/#how-it-works" className="font-medium hover:text-purple-600">How It Works</Link>
                    <Link href="/about-us" className="font-medium hover:text-purple-600">About Us</Link>
                    <Link href="/#faq" className="font-medium hover:text-purple-600">FAQ</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="#cta" className="btn-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg">
                        Get Started
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700"
                    aria-label="Toggle menu"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white px-4 py-6 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link onClick={() => setOpen(false)} href="/#features" className='py-2 px-4'>Features</Link>
                        <Link onClick={() => setOpen(false)} href="/#how-it-works" className='py-2 px-4'>How It Works</Link>
                        <Link onClick={() => setOpen(false)} href="/about-us" className='py-2 px-4' >About Us</Link>
                        <Link onClick={() => setOpen(false)} href="/#faq" className='py-2 px-4'>FAQ</Link>
                        <Link href="#cta" className="font-semibold py-2 px-4 text-primary">
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}