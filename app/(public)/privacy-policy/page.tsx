import { AppSettings } from "@/seed";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    return {
        title: 'Privacy Policy – FBI Mom Parental Control App',
        description: `FBImom Privacy Policy. Learn how we protect your family's data with secure, privacy-first parental controls.`,
    };
}

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-10">
                        <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                            <i className="fas fa-lock mr-2"></i> Privacy First
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">Privacy Policy</h1>

                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-calendar-alt text-purple-600 text-xl mr-3"></i>
                                <p className="font-bold text-lg">Last updated: January 30, 2026</p>
                            </div>
                            <p className="text-gray-700">
                                FBI Mom ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the FBI Mom mobile application ("App"). By using FBI Mom, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Section 1 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">1. Information We Collect</h2>
                        <p className="text-gray-700 mb-6">We collect information only when it is necessary to provide core features of the app.</p>

                        <div className="highlight-box">
                            <h3 className="text-xl font-bold mb-4">1.1 Personal Information</h3>
                            <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Name (optional)</li>
                                <li>Email address</li>
                                <li>Account identifier</li>
                                <li>Parent / guardian relationship information</li>
                            </ul>
                            <p className="text-gray-700">This information is used for account creation, authentication, and communication.</p>
                        </div>

                        <div className="important-note">
                            <h3 className="text-xl font-bold mb-4">1.2 Location Data (GPS)</h3>
                            <p className="text-gray-700 mb-4">FBI Mom collects <strong>real-time location data</strong> to enable core features such as:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Viewing a child's current location</li>
                                <li>Location history tracking</li>
                                <li>Safety monitoring by parents or guardians</li>
                            </ul>

                            <div className="mt-4 p-4 bg-white rounded-lg">
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">📍</span>
                                    <div>
                                        <p className="font-bold text-gray-800">Important:</p>
                                        <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                                            <li>Location data is collected <strong>only after user consent</strong></li>
                                            <li>Location tracking is used <strong>solely for family safety purposes</strong></li>
                                            <li>Location data is <strong>not shared with third parties for advertising</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="highlight-box">
                            <h3 className="text-xl font-bold mb-4">1.3 Device & Usage Information</h3>
                            <p className="text-gray-700 mb-4">We may collect limited technical information such as:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Device type</li>
                                <li>Operating system version</li>
                                <li>App version</li>
                                <li>Crash logs and performance data</li>
                            </ul>
                            <p className="text-gray-700">This data helps us improve app stability and performance.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">2. How We Use Your Information</h2>

                        <p className="text-gray-700 mb-4">We use collected data to:</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                            <li>Provide and maintain app functionality</li>
                            <li>Enable location-sharing features between family members</li>
                            <li>Improve app performance and user experience</li>
                            <li>Ensure security and prevent unauthorized access</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <div className="no-data-sell">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-ban text-red-500 text-2xl mr-3"></i>
                                <h3 className="text-xl font-bold">We do not sell your personal data</h3>
                            </div>
                            <p className="text-gray-700">Your family's data is never sold, rented, or shared for advertising or marketing purposes.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">3. User Consent & Control</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="flex items-start mb-4">
                                <i className="fas fa-user-cog text-purple-600 text-xl mr-3 mt-1"></i>
                                <div>
                                    <p className="text-gray-700 mb-4">You are always in control of your data.</p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Location access requires explicit permission</li>
                                        <li>You can disable location tracking at any time via device settings</li>
                                        <li>You may request deletion of your account and associated data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">4. Data Sharing</h2>

                        <div className="important-note">
                            <div className="flex items-start">
                                <i className="fas fa-exclamation-triangle text-orange-500 text-xl mr-3 mt-1"></i>
                                <div>
                                    <p className="text-gray-700 mb-4">We do <strong>not</strong> share personal data with third parties except:</p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>When required by law</li>
                                        <li>To comply with legal processes</li>
                                        <li>To protect the safety of users or the public</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-5 bg-gray-50 rounded-xl">
                            <div className="flex items-center">
                                <i className="fas fa-ad text-gray-600 text-xl mr-3"></i>
                                <p className="text-gray-700">We do not use personal data for advertising or profiling.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">5. Data Storage & Security</h2>

                        <div className="highlight-box">
                            <p className="text-gray-700 mb-4">We take data security seriously and apply appropriate safeguards:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Secure servers and encrypted connections (HTTPS)</li>
                                <li>Restricted access to personal data</li>
                                <li>Regular system monitoring</li>
                            </ul>
                            <p className="text-gray-700"><em>However, no method of transmission over the Internet is 100% secure.</em></p>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">6. Children's Privacy</h2>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                            <div className="flex items-start">
                                <i className="fas fa-child text-purple-600 text-xl mr-3 mt-1"></i>
                                <div>
                                    <p className="text-gray-700 mb-4">FBI Mom is designed for <strong>parental use and family safety</strong>.</p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>The app is intended to be used by parents or legal guardians</li>
                                        <li>Children's data is accessed <strong>only with parental consent</strong></li>
                                        <li>We comply with applicable child data protection laws</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">7. Data Retention</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-700 mb-4">We retain personal data only for as long as necessary to:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Provide app services</li>
                                <li>Comply with legal requirements</li>
                            </ul>
                            <p className="text-gray-700">You may request data deletion at any time.</p>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">8. Your Rights</h2>

                        <div className="highlight-box">
                            <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request data deletion</li>
                                <li>Withdraw consent</li>
                            </ul>
                            <p className="text-gray-700">Please contact us to exercise these rights.</p>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">9. Changes to This Privacy Policy</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time.</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Updates will be posted on this page</li>
                                <li>Continued use of the app indicates acceptance of changes</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div className="privacy-section">
                        <h2 className="text-3xl font-bold mb-6">10. Contact Us</h2>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Support: support@fbimom.com</li>
                                <li>Website: https://fbimom.com</li>
                            </ul>
                        </div>
                    </div>

                    {/* {/* Back to Home */}
                    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <Link href="/" className="inline-block text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition" style={{ background: 'linear-gradient(90deg, #6a5acd, #ff7bac)' }}>
                            <Home className="inline-block mr-2" size={20} />  Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
};