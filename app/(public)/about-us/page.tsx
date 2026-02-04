import { AppSettings } from "@/seed";
import { BookOpen, Eye, Github, Globe, GraduationCap, Handshake, Heart, Linkedin, Lock, MessageCircle, ScanEye, Shield, Twitter, Users, Users2, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    //const settings = await settingsService.getSettings();
    const settings = AppSettings;

    return {
        title: 'About FBI Mom – Our Mission to Protect Children Online | Parental Control App',
        description: `Learn about FBI Mom's mission to protect children online. Founded by a mom and tech expert, we create simple, ethical parental controls for modern families.`,
    };
}

export default function AboutUsPage() {
    return (
        <section>
            {/* Hero Section*/}
            <section className="py-12 md:py-20 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
                                <Heart className="inline-block mr-1" />Our Story
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Protecting Children in the Digital World
                            </h1>

                            <p className="text-xl text-gray-600 mb-8">
                                FBI Mom was founded by a mother and tech expert who saw the need for simple, ethical parental controls that empower families rather than create conflict.
                            </p>

                            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                                <Link href="#story" className="btn-primary text-white font-bold py-4 px-8 rounded-full text-center text-lg shadow-xl">
                                    <BookOpen className="inline-block mr-2" /> Read Our Story
                                </Link>
                                <Link href="#mission" className="bg-white text-purple-700 font-bold py-4 px-8 rounded-full text-center text-lg border-2 border-purple-200 hover:border-purple-400 transition">
                                    <ScanEye className="inline-block mr-2" /> Our Mission & Vision
                                </Link>
                            </div> */}
                        </div>

                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full primary-gradient flex items-center justify-center floating">
                                    <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                        <div className="text-center p-6">
                                            <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                                            <h3 className="text-2xl font-bold mb-2 text-primary">Family First</h3>
                                            <p className="text-gray-600">Since 2026</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements*/}
                                <div className="absolute -top-4 left-0 bg-white p-4 rounded-2xl shadow-xl" style={{ animationDelay: "0.5s" }}>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                            <Users className="text-green-600 text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-bold">50K+</p>
                                            <p className="text-sm text-gray-500">Families Protected</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 right-0 bg-white p-4 rounded-2xl shadow-xl" style={{ animationDelay: "1s" }}>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                                            <Globe className="text-pink-600 text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-bold">35+</p>
                                            <p className="text-sm text-gray-500">Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story*/}
            <section id="story" className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Our Humble Beginning</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">What started as a personal solution for one family has grown into a mission to protect children worldwide.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="story-card bg-linear-to-br from-purple-50 to-pink-50 p-8">
                                <div className="text-5xl mb-6">👩‍💻</div>
                                <h3 className="text-2xl font-bold mb-4">The Problem We Faced</h3>
                                <p className="text-gray-700 mb-6">In 2026, Pierre (our founder) gave her 10-year-old daughter a smartphone for the first time. As a cybersecurity expert, she knew the dangers of the digital world. But as a mom, she struggled to find parental controls that were both effective and respectful of her child's growing independence.</p>
                                <p className="text-gray-700">Every app she tried was either too technical, too invasive, or created an "us vs. them" dynamic. Sarah realized there had to be a better way.</p>
                            </div>
                        </div>

                        <div>
                            <div className="story-card bg-linear-to-br from-blue-50 to-cyan-50 p-8">
                                <div className="text-5xl mb-6">💡</div>
                                <h3 className="text-2xl font-bold mb-4">The Solution We Built</h3>
                                <p className="text-gray-700 mb-6">Sarah teamed up with child psychologists, educators, and other parents to create FBI Mom - a parental control app designed from the ground up for modern families.</p>
                                <p className="text-gray-700">Unlike other solutions, FBI Mom focuses on education and communication, not just surveillance. We believe the goal isn't to control every click, but to teach children how to make smart choices online.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            {/* Meet the Team*/}
            <section id="team" className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Meet Our Family</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">We're a diverse team of parents, educators, psychologists, and tech experts united by a common mission: protecting children online.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="team-card bg-linear-to-b from-white to-purple-50 p-8 text-center shadow-lg">
                            <div className="w-32 h-32 rounded-full primary-gradient mx-auto mb-6 flex items-center justify-center">
                                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                                    <div className="text-4xl">👩‍💼</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                            <p className="text-purple-600 font-medium mb-4">Founder & CEO</p>
                            <p className="text-gray-600 mb-6">Cybersecurity expert and mom of two. Started FBI Mom to protect her own children and realized other families needed it too.</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-purple-600">
                                    <Linkedin className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-purple-600">
                                    <Twitter className="text-xl" />
                                </Link>
                            </div>
                        </div>

                        <div className="team-card bg-linear-to-b from-white to-pink-50 p-8 text-center shadow-lg">
                            <div className="w-32 h-32 rounded-full secondary-gradient mx-auto mb-6 flex items-center justify-center">
                                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                                    <div className="text-4xl">👨‍💻</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                            <p className="text-pink-600 font-medium mb-4">CTO</p>
                            <p className="text-gray-600 mb-6">Former Google engineer and dad of three. Builds the technology that keeps FBI Mom secure, private, and easy to use.</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-pink-600">
                                    <Linkedin className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-pink-600">
                                    <Github className="text-xl" />
                                </Link>
                            </div>
                        </div>

                        <div className="team-card bg-linear-to-b from-white to-blue-50 p-8 text-center shadow-lg">
                            <div className="w-32 h-32 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 mx-auto mb-6 flex items-center justify-center">
                                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                                    <div className="text-4xl">👩‍🏫</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Dr. Elena Rodriguez</h3>
                            <p className="text-blue-600 font-medium mb-4">Child Psychologist</p>
                            <p className="text-gray-600 mb-6">Ensures FBI Mom promotes healthy development and positive parent-child relationships, not fear or conflict.</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <Linkedin className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <GraduationCap className="text-xl" />
                                </Link>
                            </div>
                        </div>

                        <div className="team-card bg-linear-to-b from-white to-green-50 p-8 text-center shadow-lg">
                            <div className="w-32 h-32 rounded-full bg-linear-to-r from-green-400 to-emerald-400 mx-auto mb-6 flex items-center justify-center">
                                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                                    <div className="text-4xl">👨‍👧‍👦</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">David Miller</h3>
                            <p className="text-green-600 font-medium mb-4">Head of Community</p>
                            <p className="text-gray-600 mb-6">Dad of four and former teacher. Runs our parent workshops and ensures user feedback shapes our product development.</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-green-600">
                                    <Linkedin className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-green-600">
                                    <Twitter className="text-xl" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-center">
                        <p className="text-gray-600 mb-8">We're proud to be a diverse, distributed team with members across 8 countries. What unites us is our commitment to protecting children and supporting families.</p>
                        <Link href="/contact-us" className="btn-primary text-white font-bold py-4 px-10 rounded-full text-lg inline-block">
                            <MessageCircle className="mr-2 inline-block" /> Meet More of Our Team
                        </Link>
                    </div> */}
                </div>
            </section>


            {/* Awards & Recognition*/}
            {/* <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-8">
                            <div className="text-5xl mb-6">🏆</div>
                            <h3 className="text-xl font-bold mb-4">Parenting Tech Award 2022</h3>
                            <p className="text-gray-600">Best Parental Control App for Family-Friendly Design</p>
                        </div>

                        <div className="text-center p-8">
                            <div className="text-5xl mb-6">🛡️</div>
                            <h3 className="text-xl font-bold mb-4">Privacy Excellence Seal</h3>
                            <p className="text-gray-600">Certified by the Family Online Safety Institute</p>
                        </div>

                        <div className="text-center p-8">
                            <div className="text-5xl mb-6">⭐</div>
                            <h3 className="text-xl font-bold mb-4">Editor's Choice</h3>
                            <p className="text-gray-600">Top-rated parental control app by Common Sense Media</p>
                        </div>
                    </div>

                </div>
            </section> */}

            {/* Final CTA */}
            {/* <section className="py-20 px-4 primary-gradient">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Be Part of Our Story</h2>
                    <p className="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto">Join thousands of families who trust FBI Mom to protect their children while teaching responsible digital citizenship.</p>

                    <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                        <Link href="/" className="bg-white text-purple-700 font-bold py-5 px-10 rounded-full text-lg shadow-2xl hover:bg-gray-100 transition">
                            <Shield className="mr-2 inline-block" /> Start Protecting Your Family
                        </Link>
                        <Link href="/contact-us" className="bg-transparent border-2 border-white text-white font-bold py-5 px-10 rounded-full text-lg hover:bg-white hover:text-purple-700 transition">
                            <MessageCircle className="mr-2 inline-block" /> Contact Our Team
                        </Link>
                    </div>
                </div>
            </section> */}
        </section>
    )
}