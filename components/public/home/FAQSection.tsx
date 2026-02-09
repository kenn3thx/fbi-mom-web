"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        q: "Is FBI Mom safe to use?",
        a: "Yes, FBI Mom uses bank-level encryption and privacy-first design. We're compliant with GDPR, COPPA, and other privacy regulations.",
    },
    {
        q: "Can my child know about the monitoring?",
        a: "Absolutely. FBI Mom promotes open communication and trust. Transparency often strengthens parent-child relationships.",
    },
    {
        q: "Does it work on Android & iOS?",
        a: "Yes, FBI Mom supports both Android and iOS platforms for parents and children.",
    },
    {
        q: "Is this better than other parental control apps?",
        a: "FBI Mom focuses on trust, education, and ethics rather than pure surveillance.",
    },
];

export default function FAQSection() {
    return (
        <section id="faq" className="bg-white py-14 sm:py-20">
            <div className="mx-auto max-w-5xl px-4">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#655B50] mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((item, index) => (
                        <FAQItem key={index} item={item} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6 text-lg">
                        Have more questions? We're here to help.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block rounded-full border-2 border-blue-400 px-8 py-3 font-bold text-blue-400 transition hover:bg-blue-400 hover:text-white"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </section>
    )
}
function FAQItem({ item }: { item: { q: string; a: string } }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={open}
            >
                <span className="text-lg font-semibold text-gray-900">
                    {item.q}
                </span>

                <ChevronDown
                    className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Animated content */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="bg-gray-50 px-6 py-6">
                        <p className="text-gray-600 leading-relaxed">
                            {item.a}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}