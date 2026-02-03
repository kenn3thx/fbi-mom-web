import { AppSettings } from "@/seed";
import { Home } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    return {
        title: 'Terms of Service – FBI Mom Parental Control App',
        description: `FBI Mom Terms of Service. Learn about acceptable use, user responsibilities, and terms for our parental control app.`,
    };
}

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-10">
                        <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                            <i className="fas fa-file-contract mr-2"></i> Legal Terms
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">Terms of Services</h1>

                        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <i className="fas fa-calendar-alt text-purple-600 text-xl mr-3"></i>
                                <p className="font-bold text-lg">Last updated: January 30, 2026</p>
                            </div>
                            <p className="text-gray-700">
                                Welcome to FBI Mom ("App", "we", "our", "us"). These Terms of Services govern your access to and use of the FBI Mom mobile application and related services. By creating an account or using the App, you agree to these Terms. If you do not agree, please do not use the App.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Section 1 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">1. Purpose of the App</h2>

                        <div className="important-box">
                            <p className="text-gray-700 mb-4">FBI Mom is a <strong>family safety and parental monitoring application</strong> designed to help parents or legal guardians:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>View real-time location of family members</li>
                                <li>Monitor location history</li>
                                <li>Improve child safety and family coordination</li>
                            </ul>
                            <p className="text-gray-700 font-bold">The App is <span className="text-red-600">not intended for surveillance without consent</span>.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">2. Eligibility</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-700 mb-4">To use FBI Mom, you must:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
                                <li>Be at least <strong>18 years old</strong>, or</li>
                                <li>Be a <strong>parent or legal guardian</strong> responsible for the child using the App</li>
                            </ul>
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <p className="text-gray-700">By using the App, you confirm that you have the legal right to manage and monitor the linked accounts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">3. Account Responsibility</h2>

                        <div className="important-box">
                            <p className="text-gray-700 mb-4">You are responsible for:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Ensuring that any child or family member added to the App has proper consent</li>
                            </ul>
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <p className="text-gray-700"><em>We are not responsible for unauthorized access caused by user negligence.</em></p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">4. Consent & Lawful Use</h2>

                        <div className="warning-box">
                            <p className="text-gray-700 mb-4">You agree that:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>You will only track or monitor individuals <strong>with their knowledge and consent</strong></li>
                                <li>You will comply with all applicable local, national, and international laws</li>
                                <li>You will not use the App for illegal, abusive, or deceptive purposes</li>
                            </ul>

                            <div className="flex items-start p-4 bg-red-50 rounded-lg">
                                <i className="fas fa-exclamation-triangle text-red-500 text-xl mr-3 mt-1"></i>
                                <div>
                                    <p className="font-bold text-gray-800">⚠️ Misuse of the App may result in account suspension or termination.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">5. Location Services</h2>

                        <div className="important-box">
                            <p className="text-gray-700 mb-4">FBI Mom relies on location data to provide core features.</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>Location tracking requires explicit device permission</li>
                                <li>You may disable location access at any time via device settings</li>
                                <li>Location accuracy depends on GPS, network, and device conditions</li>
                            </ul>
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <p className="text-gray-700"><em>We do not guarantee continuous or precise location accuracy.</em></p>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">6. Acceptable Use</h2>

                        <div className="rule-box">
                            <p className="text-gray-700 mb-4">You agree <strong>NOT</strong> to:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>Use the App to stalk, harass, or invade privacy</li>
                                <li>Monitor individuals without legal authority</li>
                                <li>Reverse engineer, modify, or abuse the App</li>
                                <li>Interfere with system security or infrastructure</li>
                            </ul>

                            <div className="p-4 bg-red-50 rounded-lg">
                                <p className="font-bold text-red-700">Violation of these rules may result in immediate termination.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">7. Data & Privacy</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-700 mb-4">Your use of the App is also governed by our <strong>Privacy Policy</strong>.</p>
                            <p className="text-gray-700 mb-6">By using FBI Mom, you acknowledge that you have read and understood our Privacy Policy.</p>

                            <div className="p-5 bg-purple-50 rounded-xl">
                                <div className="flex items-center">
                                    <i className="fas fa-shield-alt text-purple-600 text-xl mr-3"></i>
                                    <div>
                                        <p className="font-bold text-gray-800">👉 Privacy Policy</p>
                                        <a href="/privacy-policy" className="text-purple-600 hover:text-purple-800 transition">https://fbimom.com/privacy-policy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">8. Service Availability</h2>

                        <div className="important-box">
                            <p className="text-gray-700 mb-4">We aim to provide stable service but do not guarantee:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>Uninterrupted access</li>
                                <li>Error-free operation</li>
                                <li>Availability in all regions</li>
                            </ul>
                            <p className="text-gray-700"><em>We may modify, suspend, or discontinue features at any time.</em></p>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">9. Termination</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-700 mb-4">You may stop using the App at any time.</p>
                            <p className="text-gray-700 mb-6">We reserve the right to:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>Suspend or terminate accounts that violate these Terms</li>
                                <li>Restrict access to protect users or comply with legal obligations</li>
                            </ul>
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <p className="text-gray-700"><em>Upon termination, your right to use the App ends immediately.</em></p>
                            </div>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">10. Limitation of Liability</h2>

                        <div className="warning-box">
                            <p className="text-gray-700 mb-4">To the maximum extent permitted by law:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>FBI Mom is provided "as is"</li>
                                <li>We are not liable for indirect or consequential damages</li>
                                <li>We are not responsible for losses caused by misuse or incorrect data</li>
                            </ul>
                            <div className="p-4 bg-yellow-50 rounded-lg">
                                <p className="font-bold text-gray-800">Your use of the App is at your own risk.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 11 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">11. Changes to These Terms</h2>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-700 mb-4">We may update these Terms from time to time.</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Changes will be posted on this page</li>
                                <li>Continued use of the App constitutes acceptance of the updated Terms</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 12 */}
                    <div className="terms-section">
                        <h2 className="text-3xl font-bold mb-6">12. Governing Law</h2>

                        <div className="legal-note">
                            <p className="text-gray-700">These Terms are governed by and interpreted in accordance with applicable laws, without regard to conflict of law principles.</p>
                        </div>
                    </div>

                    {/* Section 13 */}
                    <div className="terms-section">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h2 className="text-3xl font-bold mb-6">13. Contact Us</h2>
                            <span>Questions About These Terms? If you have questions about these Terms, please contact us:</span>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Support: support@fbimom.com</li>
                                <li>Website: https://fbimom.com</li>
                            </ul>
                        </div>
                    </div>

                    {/* Agreement Note */}
                    <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-bold mb-3">Agreement to Terms</h3>
                                <p className="text-gray-700 mb-4">By using FBI Mom, you acknowledge that you have read, understood, and agree to be bound by these Terms of Services.</p>
                                <p className="text-gray-600 text-sm">If you do not agree to these terms, please discontinue use of the App immediately.</p>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <a href="/" className="inline-block text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition" style={{ background: 'linear-gradient(90deg, #6a5acd, #ff7bac)' }}>
                            <Home className="inline-block mr-2" size={20} /> Back to Home
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
};