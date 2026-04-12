// components/QuestionScreen.tsx
"use client";

import { div } from "framer-motion/client";

export default function QuestionScreen({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <video className="bg-gradient-to-r  from-purple-600 to-pink-300 relative inset-0" src="/models/group.webm" autoPlay muted loop></video>
      <button className="absolute bottom-10 h-screen w-screen" onClick={onContinue}></button>
      <div className="flex justify-center font-poppins">
        <h1 className="absolute top-10 text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] select-none">
  Synibe
</h1>
        <p className="absolute top-47 text-md text-white/80 font-medium text-center max-w-2xl select-none">
  Aliens are here to help you watch movies, stream videos, and listen to music together in perfect sync - no screen sharing, just seamless shared experiences.
</p>
      </div>
    </div>
  );
}