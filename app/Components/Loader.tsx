"use client"
import { motion, Variants } from "framer-motion"

const Loader = () => {
  const revealVariants: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" }, 
    visible: {
      clipPath: "inset(0 0% 0 0)", 
      transition: {
        delay: 0, 
        duration: 3.6,
        ease: "easeInOut"
      }
    }
  };
0
  return (<>
    <motion.div initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} className='relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-r from-purple-600 to-pink-300'>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <video 
          className='w-full h-full object-cover' 
          src="/models/rock.webm"
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>

      {/* Animated Text Layer */}
      <motion.div 
        className="absolute z-0 text-8xl font-poppins font-bold text-white tracking-tight left-105"
        variants={revealVariants}
        initial="hidden"
        animate="visible"
      >
        Synibe
      </motion.div>
      
    </motion.div>
    </>
  )
}

export default Loader