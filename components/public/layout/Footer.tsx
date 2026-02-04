import { AppSettings } from '@/seed';
import Image from 'next/image';
import Link from 'next/link';
//import { settingsService } from '@/services/settings.service';

export async function PublicFooter() {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    return (

        <footer className="py-12 px-4 bg-gray-900 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                <Image src="/favicon.svg" alt="Logo" width={32} height={32} />
                            </div>
                            <span className="text-2xl font-bold">{settings.siteName}</span>
                        </div>
                        <p className="text-gray-400">{settings.defaultSeoDescription}</p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Product</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#features" className="text-gray-400 hover:text-white transition">Features</Link></li>
                            <li><Link href="/download" className="text-gray-400 hover:text-white transition">Download</Link></li>
                            <li><Link href="/#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                            <li><Link href="/child-safety-tips" className="text-gray-400 hover:text-white transition">Child Safety Tips</Link></li>
                            <li><Link href="/screen-time-guides" className="text-gray-400 hover:text-white transition">Screen Time Guides</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
                            <li><Link href="/gdpr-compliance" className="text-gray-400 hover:text-white transition">GDPR Compliance</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">{settings.footerContent || `© ${new Date().getFullYear()} ${settings.siteName}. All rights reserved.`}</p>

                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-white text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>Legal Disclaimer: FBIMOM is an independent parental control tool. We are not affiliated with, associated with, authorized by, or in any way officially connected to the Federal Bureau of Investigation (FBI) or any government agency. The name "FBI" in FBIMOM is used for creative branding purposes only.</p>
                </div>
            </div>
        </footer>
    );
}