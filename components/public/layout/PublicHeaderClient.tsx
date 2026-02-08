"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
//import { AppSettings } from "@/seed";

export function PublicHeaderClient() {
    //const settings = AppSettings;
    const [open, setOpen] = useState(false);
    // const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#fdf9f2] backdrop-blur border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Logo" width={128} height={32} />
                    {/* <span className="text-xl font-bold text-gray-900">
            {settings.siteName}
          </span> */}
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/#features"
                        className="font-bold text-[#655B50] hover:text-blue-400 transition"
                    >
                        Features
                    </Link>

                    <Link
                        href="/#how-it-works"
                        className="font-bold text-[#655B50] hover:text-blue-400 transition"
                    >
                        How It Works
                    </Link>

                    <Link
                        href="/download"
                        className="font-bold text-[#655B50] hover:text-blue-400 transition"
                    >
                        Download
                    </Link>

                    {/* About dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 font-bold text-[#655B50] hover:text-blue-400 transition"
                            aria-haspopup="true"
                        >
                            About
                            <ChevronDown className="h-6 w-6 mt-0.5" />
                        </button>

                        <div className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <div className="py-2 gradient-bg">
                                <Link
                                    href="/about-us"
                                    className="block px-4 py-2 text-sm text-[#655B50] hover:bg-stone-200 font-bold"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block px-4 py-2 text-sm text-[#655B50] hover:bg-stone-200 font-bold"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/privacy-policy"
                                    className="block px-4 py-2 text-sm text-[#655B50] hover:bg-stone-200 font-bold"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms-of-service"
                                    className="block px-4 py-2 text-sm text-[#655B50] hover:bg-stone-200 font-bold"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/get-started"
                        className="inline-flex items-center justify-center rounded-full btn-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition shadow-sm"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#655B50]"
                    aria-label="Toggle menu"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white px-4 py-6 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link onClick={() => setOpen(false)} href="/#features" className='py-2 px-4 font-bold'>Features</Link>
                        <Link onClick={() => setOpen(false)} href="/#how-it-works" className='py-2 px-4 font-bold'>How It Works</Link>
                        <Link onClick={() => setOpen(false)} href="/about-us" className='py-2 px-4 font-bold' >About Us</Link>
                        <Link onClick={() => setOpen(false)} href="/get-started" className="font-semibold py-2 px-4 text-primary">
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
