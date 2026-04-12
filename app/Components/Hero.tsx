// components/QuestionScreen.tsx
"use client";
import { motion, Variants } from "framer-motion"
import { div } from "framer-motion/client";

export default function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} className="flex flex-col h-screen w-screen overflow-hidden">
      <video className="bg-gradient-to-r  from-purple-600 to-pink-300 relative inset-0" src="/models/group.webm" autoPlay muted loop></video>
      <div className="flex justify-center font-poppins">
        <h1 className="absolute top-10 text-8xl md:text-9xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] select-none">
  Synibe
</h1>
        <p className="absolute top-47 text-md text-white/80 font-medium text-center max-w-2xl select-none">
  Aliens are here to help you watch movies, stream videos, and listen to music together in perfect sync - no screen sharing, just seamless shared experiences.
</p>
      </div>
    </motion.div>
  );
}