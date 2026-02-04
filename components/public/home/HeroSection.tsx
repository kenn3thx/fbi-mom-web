"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ShieldUser, CheckCircle, Play } from "lucide-react";

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const video = {
        src: "/uploads/video/video_intro_hero.mp4",
        poster: "/uploads/images/poster_video_intro_hero.webp",
    };

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.muted = false;
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative overflow-hidden bg-white py-10 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-16 lg:grid-cols-2 items-center">

                    {/* LEFT */}
                    <div>
                        {/* <div className="inline-flex items-center rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
                            <StarIcon className="mr-2 h-4 w-4 fill-purple-500" />
                            Trusted by 50,000+ moms worldwide
                        </div> */}

                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                            {/* Smart Parental Control App <br className="hidden sm:block" />
                            <span className="text-purple-600">
                                to Protect Your Child Online
                            </span> */}
                            Reward <span className="text-purple-600">Good Habits</span> with Screen Time
                        </h1>

                        {/* <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
                            FBI Mom helps moms easily monitor screen time, block harmful content,
                            and keep children safe online — without technical complexity.
                        </p> */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
                            The 100% Free Parental Control App that Teaches Responsibility
                            Unlike other apps that only restrict. We help you guide your child toward a balanced digital life while getting things done at home!
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Assign Daily Tasks",
                                "Earn Star Credits",
                                "Trade Stars for Fun",
                                "100% Free Forever",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/get-started"
                                className="inline-flex items-center justify-center rounded-full btn-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-700"
                            >
                                <ShieldUser className="mr-2 h-5 w-5" />
                                Get Started for Free
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – VIDEO */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-180">

                            {/* Glow */}
                            <div className="absolute -inset-8 rounded-[40px] bg-purple-500/25 blur-3xl" />

                            <div className="group relative aspect-video overflow-hidden rounded-4xl bg-black shadow-2xl">

                                <video
                                    ref={videoRef}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src={video.src}
                                    playsInline
                                    preload="metadata"
                                    poster={video.poster}
                                />

                                {/* Gradient overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

                                {/* Play / Pause Button */}
                                <button
                                    onClick={togglePlay}
                                    className="
                                      absolute inset-0 flex items-center justify-center
                                      transition group-hover:bg-black/10
                                    "
                                >
                                    {
                                        !isPlaying && (
                                            <div
                                                className="
                                          flex h-20 w-20 items-center justify-center
                                          rounded-full bg-white/90
                                          backdrop-blur
                                          shadow-xl
                                          transition
                                          group-hover:scale-110
                                        "
                                            >
                                                <Play className="ml-1 h-8 w-8 text-purple-600" />
                                            </div>
                                        )
                                    }

                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
