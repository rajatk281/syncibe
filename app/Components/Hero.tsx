// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const characters = [
  {
    id: "ghost",
    label: "Ghost",
    emoji: "👋",
    description: "I am here to onboard you",
    link: "/onboarding",
    // hit-area position (matches the character in the video)
    position: "bottom-1/3 left-68",
    size: "h-50 w-15",
    // tooltip pops up above the hit-area
    tooltipOffset: "bottom-60",
    zIndex: "z-20",
  },
  {
    id: "Greeny",
    label: "Greeny",
    emoji: "",
    description: "Come let us watch and listen together",
    link: "/room",
    position: "bottom-1/4 left-106",
    size: "h-40 w-50",
    tooltipOffset: "bottom-50",
    zIndex: "z-10",
  },
  {
    id: "Grosh",
    label: "Grosh",
    emoji: "",
    description: "See how everything works",
    link: "/working",
    position: "bottom-1/20 left-74",
    size: "h-40 w-40",
    tooltipOffset: "bottom-44",
    zIndex: "z-20",
  },
  {
    id: "Coco",
    label: "Coco",
    emoji: "",
    description: "Why Synibe ?",
    link: "/about",
    position: "bottom-1/30 left-1/3",
    size: "h-26 w-20",
    tooltipOffset: "bottom-30",
    zIndex: "z-10",
  },
  {
    id: "Batty",
    label: "Batty",
    emoji: "🛸",
    description: "Learn more about us",
    link: "/about",
    position: "bottom-1/30 left-140",
    size: "h-32 w-20",
    tooltipOffset: "bottom-36",
    zIndex: "z-10",
  },
  {
    id: "Rock",
    label: "Rock",
    emoji: "",
    description: "If any of them misbehaves, I will crush them just tell me ",
    link: "/contact",
    position: "bottom-1/30 left-165",
    size: "h-52 w-35",
    tooltipOffset: "bottom-58",
    zIndex: "z-10",
  },
  {
    id: "Antlen",
    label: "Antlen",
    emoji: "",
    description: "Wanna go for premium features ?",
    link: "/about",
    position: "bottom-1/30 right-120",
    size: "h-48 w-25",
    tooltipOffset: "bottom-58",
    zIndex: "z-10",
  },
  {
    id: "ChimpChamp",
    label: "ChimpChamp",
    emoji: "",
    description: "Let me tell you about the features",
    link: "/features",
    position: "bottom-1/30 right-90",
    size: "h-68 w-55",
    tooltipOffset: "bottom-78",
    zIndex: "z-0",
  },
  {
    id: "Fraggy",
    label: "Fraggy",
    emoji: "",
    description: "Wanna catch up with your friends ?",
    link: "/about",
    position: "bottom-1/30 right-60",
    size: "h-38 w-45",
    tooltipOffset: "bottom-48",
    zIndex: "z-10",
  },
  {
    id: "Jensy",
    label: "Jensy",
    emoji: "",
    description: "Need help ? ",
    link: "/help",
    position: "bottom-58 right-140",
    size: "h-24 w-15",
    tooltipOffset: "bottom-28",
    zIndex: "z-20",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function CharacterSpot({
  label,
  emoji,
  description,
  link,
  position,
  size,
  tooltipOffset,
  zIndex,
}: (typeof characters)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`absolute ${position} ${zIndex} ${size} cursor-pointer border`}
      >
        {/* Tooltip card */}
        <div
          className={`
            group absolute ${tooltipOffset} left-1/2 -translate-x-1/2
            h-20 w-64 rounded-2xl
            bg-white/10 backdrop-blur-lg border border-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.3)]
            transition-all duration-500 ease-out
            ${
              hovered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95 pointer-events-none"
            }
          `}
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl" />

          {/* Content */}
          <div className="relative z-10 p-3 flex flex-col justify-center h-full">
            <p className="text-xs font-bold tracking-wide uppercase text-white/70">
              {label}
            </p>
            <p className="text-sm text-white font-medium leading-tight">
              {description} {emoji}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col h-screen w-screen overflow-hidden"
    >
      <video
        className="bg-gradient-to-r from-purple-600 to-pink-300 relative inset-0"
        src="/models/group.webm"
        autoPlay
        muted
        loop
      />

      <div className="flex justify-center font-poppins">
        <h1 className="absolute top-10 text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] select-none">
          Synibe
        </h1>
        <p className="absolute top-47 text-md text-white/80 font-medium text-center max-w-2xl select-none">
          Aliens are here to help you watch movies, stream videos, and listen to
          music together in perfect sync - no screen sharing, just seamless
          shared experiences.
        </p>
      </div>

      {/* Render every character spot from the data array */}
      {characters.map((char) => (
        <CharacterSpot key={char.id} {...char} />
      ))}
    </motion.div>
  );
}
