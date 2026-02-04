import { AppSettings } from "@/seed";
import { Github, Globe, GraduationCap, Heart, Linkedin, Twitter, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
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

    const team = [
        {
            name: "Steve Bang",
            role: "CTO",
            roleColor: "text-purple-600",
            image: "/uploads/images/steve-bang.png",
            bio:
                "Architect of the FBIMOM ecosystem. I focus on building secure, seamless technology that parents can trust, ensuring that every 'Star' earned and every minute monitored is handled with the highest level of data integrity.",
            // socials: [
            //     { icon: Linkedin, href: "#" },
            //     { icon: Twitter, href: "#" },
            // ],
        },
        {
            name: "Kennenth",
            role: "Software Engineer",
            roleColor: "text-pink-600",
            image: "/uploads/images/kennenth.png",
            bio:
                "Specializing in robust mobile development, I ensure FBIMOM stays fast and fluid, no matter how many tasks are created. My daily challenge is turning complex control algorithms into a simple, intuitive user experience.",
            // socials: [
            //     { icon: Linkedin, href: "#" },
            //     { icon: Github, href: "#" },
            // ],
        },
        {
            name: "ToTo",
            role: "Marketing Lead",
            roleColor: "text-blue-600",
            image: "/uploads/images/toto.jpeg",
            bio:
                "My mission is to share the FBIMOM vision with families worldwide. I focus on understanding the daily challenges moms face and ensuring our message resonates with empathy. I’m here to build a community where parenting in the digital age feels less like a struggle and more like a shared success.",
            // socials: [
            //     { icon: Linkedin, href: "#" },
            //     { icon: GraduationCap, href: "#" },
            // ],
        },
    ];

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

                            <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight text-[#655B50]">
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

                        {/* Right image */}
                        <div className="lg:w-1/2 md:px-12">
                            <div className=" overflow-hidden">
                                <Image
                                    src="/uploads/images/hero-section-about-us.jpg" // your existing image
                                    alt="Mother protecting child online"
                                    width={600}
                                    height={600}
                                    className="object-cover rounded-3xl shadow-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story*/}
            <section id="story" className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">The Story Behind FBIMOM</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Peace of mind for the modern parent.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="story-card bg-linear-to-br from-purple-50 to-pink-50 p-8">
                                <div className="text-5xl mb-6">👩‍💻</div>
                                <h3 className="text-2xl font-bold mb-4">The Problem We Faced</h3>
                                <p className="text-gray-700 mb-6">FBIMOM was born from a simple question: How can we let our children explore the internet without constant fear? We created this tool to be an extension of a parent’s intuition. We believe that digital safety shouldn't feel like a police state—it should feel like a safety net.</p>
                                <p className="text-gray-700">FBIMOM watches over your child’s interactions with the same care you do, alerting you only when it truly matters. It is artificial intelligence dedicated to family love.</p>
                            </div>
                        </div>

                        <div>
                            <div className="story-card bg-linear-to-br from-blue-50 to-cyan-50 p-8">
                                <div className="text-5xl mb-6">💡</div>
                                <h3 className="text-2xl font-bold mb-4">The Solution We Built</h3>
                                <p className="text-gray-700 mb-6">We didn't just build a monitoring tool; we created a collaborative ecosystem where parents and children work together toward a healthy digital life. FBIMOM is designed as a "Quest & Reward" platform where safety meets fun.</p>
                                <p className="text-gray-700">Unlike other solutions, FBI Mom focuses on education and communication, not just surveillance. We believe the goal isn't to control every click, but to teach children how to make smart choices online.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Meet the Team*/}
            <section id="team" className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4 text-[#655B50]">Meet Our Small Team, Big Vision</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">FBIMOM was born from the collaboration of three passionate creators who believe that parental control shouldn't just be about restrictions. We worked together to build a tool that empowers moms and rewards kids, making daily life easier for everyone, one star at a time.</p>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
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

function TeamMemberCard({ member }: { member: any }) {
    return (
        <div className="
      rounded-2xl bg-white p-8 text-center
      shadow-sm ring-1 ring-gray-100
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
    ">
            {/* Avatar */}
            <div className="relative mx-auto mb-6 h-32 w-32">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
            </h3>

            {/* Role */}
            <p className={`mt-1 text-sm font-medium ${member.roleColor}`}>
                {member.role}
            </p>

            {/* Bio */}
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {member.bio}
            </p>

            {/* Socials */}
            <div className="mt-6 flex justify-center gap-4">
                {member.socials && member.socials.map((social: any, i: number) => (
                    <Link
                        key={i}
                        href={social.href}
                        className="text-gray-400 transition hover:text-gray-700"
                    >
                        <social.icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
        </div>
    );
}