"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ShieldUser, CheckCircle, Play, Volume2, VolumeOff } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videos = [
    {
      src: "/uploads/video/video_intro_hero.mp4",
      poster: "/uploads/images/poster_video_intro_hero.webp",
    },
    {
      src: "/uploads/video/video_intro_hero_2.mp4",
      poster: "/uploads/images/poster_video_intro_hero_2.png",
    },
    {
      src: "/uploads/video/video_intro_hero_3.mp4",
      poster: "/uploads/images/poster_video_intro_hero_3.png",
    }
  ];

  const video = {
    src: "/uploads/video/video_intro_hero.mp4",
    poster: "/uploads/images/poster_video_intro_hero.webp",
  };

  const handleTogglePlay = async () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    try {
      if (videoEl.paused) {
        videoEl.muted = true;
        await videoEl.play();
        setIsPlaying(true);
        setIsMuted(true);
      } else {
        videoEl.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Video play blocked:", err);
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = !videoEl.muted;
    setIsMuted(videoEl.muted);
  };

  const handleVideoEnded = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.currentTime = 0;
    videoEl.pause();
    setIsPlaying(false);
  };

  const selectedVideo = useMemo(() => {
    return videos[Math.floor(Math.random() * videos.length)];
  }, []);

  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold leading-tight text-gray-600 mb-6">
              Reward Good Habits with Screen Time
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
              The 100% Free Parental Control App that Teaches Responsibility.
              Unlike other apps that only restrict, we help you guide your child
              toward a balanced digital life.
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

            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full btn-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-700"
            >
              <ShieldUser className="mr-2 h-5 w-5" />
              Get Started for Free
            </Link>
          </div>

          {/* RIGHT – VIDEO */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-180">

              {/* Glow */}
              <div className="absolute -inset-8 rounded-[20px] bg-orange-100 blur-3xl" />

              <div className="group relative aspect-video overflow-hidden rounded-4xl bg-black shadow-2xl">

                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={selectedVideo.src}
                  poster={selectedVideo.poster}
                  playsInline
                  muted
                  preload="metadata"
                  onEnded={handleVideoEnded}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Play button */}
                {!isPlaying && (
                  <button
                    onClick={handleTogglePlay}
                    className="absolute inset-0 flex items-center justify-center transition hover:bg-black/10"
                  >
                    <Play className="ml-1 h-10 w-10 text-white" />
                  </button>
                )}

                {/* Mute / Unmute */}
                {isPlaying && (
                  <button
                    onClick={handleToggleMute}
                    className="absolute bottom-4 left-4 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                  >
                    {
                      isMuted ? <VolumeOff className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />
                    }
                  </button>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
