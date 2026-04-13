"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const front = frontRef.current;
    const back = backRef.current;

    if (!section || !card || !front || !back) return;

    // Set initial state – back face hidden
    gsap.set(card, { transformStyle: "preserve-3d", perspective: 1200 });
    gsap.set(back, { rotationY: 180, backfaceVisibility: "hidden" });
    gsap.set(front, { backfaceVisibility: "hidden" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=140%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Phase 1 – subtle lift & scale before flip
    tl.to(card, {
      y: -20,
      scale: 0.97,
      boxShadow: "0 60px 120px rgba(0,0,0,0.25)",
      duration: 0.25,
      ease: "power2.out",
    })
    // Phase 2 – full 180° flip
    .to(card, {
      rotationY: 180,
      duration: 1,
      ease: "power3.inOut",
    })
    // Phase 3 – settle back
    .to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
      duration: 0.25,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen flex justify-center items-center p-20 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Wrapper that flips */}
      <div
        ref={cardRef}
        className="relative w-full"
        style={{
          height: "90%",
          transformStyle: "preserve-3d",
          borderRadius: "2rem",
          willChange: "transform",
        }}
      >
        {/* ───────────── FRONT – Watch Together ───────────── */}
        <div
          ref={frontRef}
          className="absolute inset-0 rounded-[2rem] shadow-2xl flex overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Left – video */}
          <div className="w-1/2 h-full">
            <video
              className="w-full h-full object-cover"
              src="./spidervid.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Right – text */}
          <div className="w-1/2 h-full flex bg-white items-center justify-center p-10">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-black">
                Watch Together. Stay Connected.
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Syncibe lets you watch videos with your friends in perfect sync
                — no matter where they are. Play, pause, or skip, and
                everyone's screen updates instantly.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether it's movies, YouTube, or shared moments, experience it
                together in real-time with zero lag and seamless
                synchronization.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                Start Watching Together →
              </button>
            </div>
          </div>
        </div>

        {/* ───────────── BACK – Listen Together ───────────── */}
        <div
          ref={backRef}
          className="absolute inset-0 rounded-[2rem] shadow-2xl flex overflow-hidden bg-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Left – text (mirror of front's right) */}
          <div
            className="w-1/2 h-full flex items-center justify-center p-10"
          >
            <div>
              {/* music note badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-5"
              >
                <span>🎵</span> New Feature
              </div>

              <h1
                className="text-4xl font-bold mb-4 leading-tight"
              >
                Listen Together. Feel Every Beat.
              </h1>

              <p
                className="mb-6 leading-relaxed"
              >
                Sync music with friends in real-time — no matter where they
                are. Queue tracks, skip, or pause and everyone hears the same
                beat at the same instant.
              </p>

              <p
                className="mb-8 leading-relaxed"
              >
                Connect through Spotify, Apple Music, or upload your own
                library. Share playlists and create unforgettable listening
                parties from anywhere.
              </p>

              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                Start Listen Together →
              </button>
            </div>
          </div>

          {/* Right – animated music visualiser card */}
          <div
            className="w-1/2 h-full flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center gap-6 w-4/5">
              {/* Album art mock */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "200px",
                  height: "200px",
                  boxShadow:
                    "0 0 60px rgba(168,85,247,0.4), 0 0 120px rgba(168,85,247,0.15)",
                  animation: "spin-slow 12s linear infinite",
                }}
              >
                <div
                  className="w-full h-full bg-slate-200"
                  
                />
                {/* Vinyl hole */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="rounded-full bg-[#1a1a2e]"
                    style={{ width: 40, height: 40 }}
                  />
                </div>
                {/* music icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">🎶</span>
                </div>
              </div>

              {/* Song info */}
              <div className="text-center">
                <p className="font-bold text-white text-xl">Blinding Lights</p>
                <p style={{ color: "rgba(196,181,253,0.7)" }} className="text-sm mt-1">
                  The Weeknd · After Hours
                </p>
              </div>

              {/* Seek bar */}
              <div className="w-full">
                <div
                  className="h-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "62%",
                      background:
                        "linear-gradient(90deg, #7c3aed, #a855f7)",
                      boxShadow: "0 0 8px rgba(168,85,247,0.6)",
                    }}
                  />
                </div>
                <div
                  className="flex justify-between text-xs mt-1"
                  style={{ color: "rgba(196,181,253,0.5)" }}
                >
                  <span>2:18</span>
                  <span>3:42</span>
                </div>
              </div>

              {/* Visualiser bars */}
              <div className="flex items-end gap-1" style={{ height: 48 }}>
                {[18, 36, 28, 48, 32, 44, 20, 38, 26, 46, 30, 42, 22].map(
                  (h, i) => (
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: h,
                        borderRadius: 3,
                        background:
                          "linear-gradient(180deg, #a855f7, #7c3aed)",
                        animation: `pulse-bar ${0.6 + (i % 4) * 0.15}s ease-in-out infinite alternate`,
                        opacity: 0.85,
                      }}
                    />
                  )
                )}
              </div>

              {/* Listener avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {["👩‍🎤", "🧑‍🎵", "👨‍🎤", "🎤"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{
                        background: `hsl(${260 + i * 20}, 70%, 40%)`,
                        border: "2px solid #1a1a2e",
                        zIndex: 4 - i,
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <span
                  className="text-xs"
                  style={{ color: "rgba(196,181,253,0.7)" }}
                >
                  +12 listening now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes injected globally */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-bar {
          from { transform: scaleY(0.5); opacity: 0.6; }
          to   { transform: scaleY(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Features;