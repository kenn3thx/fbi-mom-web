
import { AppSettings } from "@/seed";
import { Ban, Edit, Eye, File, Paperclip, Trash } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    return {
        title: 'GDPR Compliance – FBI Mom Parental Control App',
        description: `FBImom GDPR Compliance information. Learn how we protect your data rights under the General Data Protection Regulation.`,
    };
}


export default function GDPRCompliancePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-6">
                    <i className="fas fa-gavel text-purple-600 text-2xl"></i>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">GDPR Compliance</h1>
                <p className="text-gray-600 text-lg">How FBI Mom protects your data rights under the General Data Protection Regulation (GDPR)</p>

                <div className="mt-8 p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-center">
                        <i className="fas fa-calendar-alt text-purple-500 mr-3"></i>
                        <p className="font-medium">Effective Date: January 30, 2026</p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to GDPR</h2>
                <p className="text-gray-700 mb-4">
                    FBI Mom is fully committed to complying with the General Data Protection Regulation (GDPR) (EU) 2016/679.
                    We recognize the importance of data privacy and have implemented measures to ensure the protection of personal data
                    for all our users, including those in the European Union.
                </p>
                <p className="text-gray-700">
                    This page outlines our approach to GDPR compliance and explains your rights under this regulation.
                </p>
            </div>

            {/* GDPR Principles */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">GDPR Principles We Follow</h2>

                <div className="highlight-box">
                    <p className="text-gray-700 mb-4">FBI Mom adheres to the following GDPR principles:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Lawfulness, fairness, and transparency:</strong> We process personal data legally, fairly, and transparently</li>
                        <li><strong>Purpose limitation:</strong> We collect data only for specified, explicit, and legitimate purposes</li>
                        <li><strong>Data minimization:</strong> We only collect data that is adequate, relevant, and necessary</li>
                        <li><strong>Accuracy:</strong> We keep personal data accurate and up to date</li>
                        <li><strong>Storage limitation:</strong> We retain personal data only as long as necessary</li>
                        <li><strong>Integrity and confidentiality:</strong> We process data securely to protect against unauthorized or unlawful processing</li>
                        <li><strong>Accountability:</strong> We take responsibility for complying with GDPR principles</li>
                    </ul>
                </div>
            </div>

            {/* Your Rights */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Your GDPR Rights</h2>
                <p className="text-gray-700 mb-6">Under GDPR, you have the following rights regarding your personal data:</p>

                <div className="rights-grid">
                    <div className="right-card">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <Eye className="text-blue-600 text-lg" />
                            </div>
                            <h3 className="font-bold text-lg">Right to Access</h3>
                        </div>
                        <p className="text-gray-600">You have the right to request access to your personal data and receive a copy of it.</p>
                    </div>

                    <div className="right-card">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <Edit className="text-green-600 text-lg" />
                            </div>
                            <h3 className="font-bold text-lg">Right to Rectification</h3>
                        </div>
                        <p className="text-gray-600">You can request correction of inaccurate or incomplete personal data.</p>
                    </div>

                    <div className="right-card">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                <Trash className="text-red-600 text-lg" />
                            </div>
                            <h3 className="font-bold text-lg">Right to Erasure</h3>
                        </div>
                        <p className="text-gray-600">You can request deletion of your personal data under certain circumstances.</p>
                    </div>

                    <div className="right-card">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <Ban className="text-purple-600 text-lg" />
                            </div>
                            <h3 className="font-bold text-lg">Right to Restrict Processing</h3>
                        </div>
                        <p className="text-gray-600">You can request restriction of processing your personal data in certain situations.</p>
                    </div>

                    <div className="right-card">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                                <File className="text-yellow-600 text-lg" />
                            </div>
                            <h3 className="font-bold text-lg">Right to Data Portability</h3>
                        </div>
                        <p className="text-gray-600">You can receive your personal data in a structured, commonly used format.</p>
                    </div>

                    <div className="right-card">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                <Paperclip className="text-pink-600 text-lg" />
                            </div>
                            <h3 className="font-bold text-lg">Right to Object</h3>
                        </div>
                        <p className="text-gray-600">You can object to processing of your personal data in certain circumstances.</p>
                    </div>
                </div>
            </div>

            {/* Data Processing */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Lawful Basis for Processing</h2>

                <div className="highlight-box">
                    <p className="text-gray-700 mb-4">FBI Mom processes personal data based on the following lawful bases:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Consent:</strong> When you explicitly agree to specific processing activities</li>
                        <li><strong>Contractual necessity:</strong> When processing is necessary to provide our services</li>
                        <li><strong>Legal obligation:</strong> When processing is required by applicable laws</li>
                        <li><strong>Legitimate interests:</strong> When processing is necessary for our legitimate business interests, balanced against your rights</li>
                    </ul>
                </div>
            </div>

            {/* Data Protection Measures */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Data Protection Measures</h2>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-700 mb-4">To ensure GDPR compliance, FBI Mom has implemented the following measures:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Data Protection by Design and Default:</strong> Privacy considerations are integrated into our development process</li>
                        <li><strong>Data Processing Agreements:</strong> We have DPAs with all third-party processors</li>
                        <li><strong>Security Measures:</strong> Encryption, access controls, and regular security assessments</li>
                        <li><strong>Data Protection Officer:</strong> We have appointed a DPO to oversee compliance</li>
                        <li><strong>Data Breach Procedures:</strong> We have processes to detect, report, and investigate data breaches</li>
                        <li><strong>International Transfers:</strong> We use appropriate safeguards for data transfers outside the EU</li>
                    </ul>
                </div>
            </div>

            {/* Children's Data */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Children's Data Protection</h2>

                <div className="p-5 bg-linear-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div className="flex items-start">
                        <i className="fas fa-child text-blue-500 text-xl mr-3 mt-1"></i>
                        <div>
                            <p className="text-gray-700">
                                FBI Mom is designed for parental use and family safety. We process children's data only with explicit parental consent.
                                Parents or legal guardians have control over their children's data and can exercise GDPR rights on their behalf.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact for GDPR Requests */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Exercising Your GDPR Rights</h2>
                <p className="text-gray-700 mb-4">Contact Our Data Protection Officer</p>
                <p className="text-gray-700 mb-6">To exercise your GDPR rights or for any privacy-related inquiries, please reach out to our Data Protection Officer (DPO) using the contact details below:</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Email DPO for GDPR-specific requests: <Link href="mailto:dpo@fbimom.com" className="text-blue-600 hover:text-blue-800">dpo@fbimom.com</Link></li>
                        <li>General Support for privacy questions: <Link href="mailto:support@fbimom.com" className="text-blue-600 hover:text-blue-800">support@fbimom.com</Link></li>
                    </ul>
                </div>


                <div className="mt-6 p-5 bg-gray-50 rounded-xl">
                    <p className="text-gray-700">
                        <strong>Note:</strong> To process your GDPR request, we may need to verify your identity to protect your data.
                        This is a security measure to ensure that personal data is not disclosed to unauthorized persons.
                    </p>
                </div>
            </div>

            {/* Updates */}
            <div className="section">
                <h2 className="text-2xl font-bold mb-4">Updates to Our GDPR Compliance</h2>

                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-700 mb-4">
                        We regularly review and update our GDPR compliance measures to ensure ongoing adherence to the regulation.
                        Any significant changes to our data processing activities or privacy practices will be reflected in our Privacy Policy.
                    </p>
                    <div className="flex items-center">
                        <i className="fas fa-link text-purple-500 mr-3"></i>
                        <a href="/privacy-policy" className="text-purple-600 hover:text-purple-800 font-medium">
                            Review our Privacy Policy for detailed information
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-gray-600">Need more information about data protection?</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/privacy-policy" className="bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-200 transition">
                            Privacy Policy
                        </Link>
                        <Link href="/" className="bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-6 rounded-lg hover:opacity-90 transition">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}