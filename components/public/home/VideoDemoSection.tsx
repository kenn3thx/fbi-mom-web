
"use client";

import { useRef, useState } from "react";

export function VideoDemoSection() {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const videos = [
        {
            title: "Transform Chores into Achievements",
            desc: "Build healthy habits with love. FBIMOM helps you turn everyday tasks like homework or cleaning into positive moments. With one tap, you reward your child with stars, making responsibility feel encouraging and fun.",
            src: "/uploads/video/video_1.mp4",
            poster: "/uploads/images/poster_video_demo_1.webp",
        },
        {
            title: "How the Star Economy Works",
            desc: "FBIMOM makes rewards easy. You give tasks, your child completes them, and after you approve, they earn stars. Those stars can be used for screen time or small rewards you choose.",
            src: "/uploads/video/video_2_new.mp4",
            poster: "/uploads/images/poster_video_demo_2.webp",
        },
        {
            title: "Effort Rewarded: More Screen Time, Happier Kids",
            desc: "See how it works. Your child completes tasks, earns stars, and uses them for screen time. They enjoy their time more—and you know they earned it. A win for everyone.",
            src: "/uploads/video/video_3.mp4",
            poster: "/uploads/images/poster_video_demo_3.webp",
        },
    ];

    const playVideoAt = (index: number) => {
        const currentVideo = videoRefs.current[index];
        if (!currentVideo) return;

        // Nếu click lại video đang chạy → pause
        if (currentIndex === index && !currentVideo.paused) {
            currentVideo.pause();
            setCurrentIndex(null);
            return;
        }

        // Pause tất cả video khác
        videoRefs.current.forEach((v, i) => {
            if (!v) return;
            if (i !== index) v.pause();
        });

        currentVideo.play();
        setCurrentIndex(index);
    };

    const handleEnded = (index: number) => {
        const nextIndex = index + 1;

        if (videoRefs.current[nextIndex]) {
            playVideoAt(nextIndex);
        } else {
            setCurrentIndex(null); // video cuối kết thúc
        }
    };

    return (
        <div id="#how-it-works" className="relative w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Stop Arguing, Start Motivating
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Watch how our unique Star System teaches your child to earn their screen time through positive actions.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video, index) => (

                        <div key={index} className="mx-auto w-full max-w-[320px]">
                            <div
                                key={index}
                                className="
                              group relative mx-auto w-full max-w-[320px]
                              overflow-hidden rounded-2xl bg-black shadow-xl
                              aspect-9/16
                            "
                            >
                                {/* Video */}
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src={video.src}
                                    preload="metadata"
                                    playsInline
                                    onEnded={() => handleEnded(index)}
                                    poster={video.poster}
                                    
                                />

                                {/* Overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                                {/* Play Button */}
                                {
                                    currentIndex !== index && (
                                        <button
                                            className="
                                  absolute left-1/2 top-1/2 z-10
                                  flex h-16 w-16 -translate-x-1/2 -translate-y-1/2
                                  items-center justify-center rounded-full
                                  bg-white/20 backdrop-blur-md
                                  transition-all duration-300
                                  hover:scale-110 hover:bg-white/30
                                "
                                            onClick={() => playVideoAt(index)}
                                        >
                                            {/* PLAY ICON */}
                                            <svg
                                                className="h-8 w-8 text-white"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>)
                                }

                            </div>

                            {/* TEXT BELOW VIDEO */}
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {video.title}
                                </h3>
                                <p className="text-lg mt-1 text-gray-500">
                                    {video.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
