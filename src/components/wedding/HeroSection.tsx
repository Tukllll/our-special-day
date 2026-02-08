import { motion } from "framer-motion";
import { useState } from "react";

import ScratchCard from "react-scratchcard-v2";
import heartImage from "@/assets/heart.png";

const HeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleComplete = () => {
    setIsRevealed(true);
  };

  return (
    <section className="wedding-section relative overflow-hidden bg-background">
      {/* Minimal decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/20"
            style={{
              top: `${15 + (i * 7) % 70}%`,
              left: `${10 + (i * 13) % 80}%`,
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="flex flex-col items-center justify-center flex-1 w-full px-6">
        <div className="relative self-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-bold tracking-widest uppercase text-muted-foreground mb-6"
          >
            В САМО<span className="relative">М<motion.div
              className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2"
              initial={{ y: 0, rotate: 0 }}
              animate={{ 
                y: [0, -2, 0, -150, -300],
                x: [0, 0, 0, 150, 350],
                rotate: [0, -3, 3, -15, -25],
                opacity: [1, 1, 1, 1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatDelay: 5,
                times: [0, 0.05, 0.1, 0.5, 1],
                ease: "easeOut"
              }}
            >
              {/* Hand-drawn style bird */}
              <svg 
                viewBox="0 0 40 30" 
                className="w-8 h-6 md:w-12 md:h-9 text-muted-foreground"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Body */}
                <path d="M8 18 Q15 14, 28 16 Q32 17, 35 15" />
                {/* Head */}
                <circle cx="35" cy="14" r="3" />
                {/* Beak */}
                <path d="M38 13 L40 12 L38 14" />
                {/* Eye */}
                <circle cx="36" cy="13" r="0.8" fill="currentColor" />
                {/* Wing up */}
                <path d="M15 16 Q12 8, 18 5 Q22 3, 26 6" />
                {/* Wing detail */}
                <path d="M18 14 Q16 10, 20 8" />
                {/* Tail */}
                <path d="M8 18 Q4 16, 2 18" />
                <path d="M8 18 Q5 19, 3 22" />
              </svg>
            </motion.div></span><br />НАЧАЛЕ
          </motion.p>
        </div>

        {/* Scratch card heart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <ScratchCard
              width={256}
              height={256}
              image={heartImage}
              finishPercent={99}
              onComplete={handleComplete}
              brushSize={30}
            >
              <div className="w-full h-full flex items-center justify-center bg-background">
                <p className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-muted-foreground">
                  27 МАЯ
                </p>
              </div>
            </ScratchCard>
            
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
