import { AppSettings } from '@/seed';
import { Menu, Shield } from 'lucide-react';
import Link from 'next/link';
import { PublicHeaderClient } from './PublicHeaderClient';
//import { settingsService } from '@/services/settings.service';

/**
 * Public Layout
 * Wraps all public-facing pages
 */

// export async function PublicHeader() {
//     //const settings = await settingsService.getSettings();
//     const settings = AppSettings;

//     return (
//         <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

//             <nav className="sticky top-0 z-50 bg-white shadow-md py-4">
//                 <div className="container mx-auto px-4 flex justify-between items-center">
//                     <Link href="/">
//                         <div className="flex items-center space-x-2">
//                             <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center">
//                                 <Shield className="text-white text-xl" />
//                             </div>
//                             <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{settings.siteName}</span>
//                         </div>
//                     </Link>

//                     <div className="hidden md:flex space-x-8">
//                         <Link href="/#features" className="font-medium hover:text-purple-600 transition">Features</Link>
//                         <Link href="/#how-it-works" className="font-medium hover:text-purple-600 transition">How It Works</Link>
//                         <Link href="/about-us" className="font-medium hover:text-purple-600 transition">About Us</Link>
//                         <Link href="/#faq" className="font-medium hover:text-purple-600 transition">FAQ</Link>
//                     </div>

//                     <div>
//                         <Link href="#cta" className="btn-primary  text-white font-semibold py-3 px-6 rounded-full shadow-lg">Get Started</Link>
//                     </div>

//                     {/* Mobile menu button */}
//                     <button id="mobile-menu-button" className="md:hidden text-gray-700">
//                         <Menu className="text-2xl" />
//                     </button>
//                 </div>


//                 <div id="mobile-menu" className="md:hidden hidden bg-white px-4 py-6 shadow-lg">
//                     <div className="flex flex-col space-y-4">
//                         <Link href="#features" className="font-medium hover:text-purple-600 transition">Features</Link>
//                         <Link href="#how-it-works" className="font-medium hover:text-purple-600 transition">How It Works</Link>
//                         <Link href="#testimonials" className="font-medium hover:text-purple-600 transition">Testimonials</Link>
//                         <Link href="#faq" className="font-medium hover:text-purple-600 transition">FAQ</Link>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }

export async function PublicHeader() {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <PublicHeaderClient />
        </header>
    );
}