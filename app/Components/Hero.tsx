// components/QuestionScreen.tsx
"use client";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function Hero() {
  // const handleGhost = () => {
  //   alert("Ghost")
  // }
  const router = useRouter();;

  const [hovered, setHovered] = useState(false);
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
      <div onClick={()=>router.push("/onboarding")} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="border h-50 w-15 absolute bottom-1/3 left-68 z-20 transition-all duration-500">
        {hovered &&
          <div className="group absolute bottom-60 h-20 w-64 rounded-2xl 
  bg-white/10 backdrop-blur-lg border border-white/20 
  shadow-[0_10px_40px_rgba(0,0,0,0.3)] 
  transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] 
  cursor-pointer overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
    bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl">
            </div>

            {/* Content */}
            <div className="relative z-10 p-3 flex flex-col justify-center h-full">
              <p className="text-xs font-bold tracking-wide uppercase">
                Ghost
              </p>
              <p className="text-sm text-white font-medium leading-tight">
                I am here to onboard you 👋
              </p>
            </div>
          </div>
        }
      </div>
      <div className="border h-40 w-40 absolute bottom-1/20 left-74 z-20"></div>
      <div className="border h-56 w-50 absolute bottom-1/5 left-106 z-10"></div>
      <div className="border h-26 w-20 absolute bottom-1/30 left-1/3 z-10"></div>
      <div className="border h-56 w-50 absolute bottom-1/5 left-106 z-10"></div>
      <div className="border h-56 w-50 absolute bottom-1/5 left-106 z-10"></div>
      <div className="border h-56 w-50 absolute bottom-1/5 left-106 z-10"></div>
      <div className="border h-56 w-50 absolute bottom-1/5 left-106 z-10"></div>
      <div className="border h-56 w-50 absolute bottom-1/5 left-106 z-10"></div>
    </motion.div>
  );
}