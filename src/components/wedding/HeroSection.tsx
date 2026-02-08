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
            В САМО<span className="relative">М<motion.svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-6 h-6 md:w-10 md:h-10 text-muted-foreground"
              initial={{ y: 0, rotate: 0 }}
              animate={{ 
                y: [0, -5, 0, -80, -120],
                x: [0, 0, 0, 30, 80],
                rotate: [0, -5, 5, -10, -15],
                opacity: [1, 1, 1, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
                times: [0, 0.1, 0.2, 0.6, 1],
                ease: "easeOut"
              }}
            >
              <path d="M12 2C8 6 4 9 4 13c0 2.5 1.5 4.5 3.5 5.5L12 22l4.5-3.5C18.5 17.5 20 15.5 20 13c0-4-4-7-8-11z" />
              <ellipse cx="8" cy="11" rx="4" ry="2" transform="rotate(-30 8 11)" />
              <ellipse cx="16" cy="11" rx="4" ry="2" transform="rotate(30 16 11)" />
            </motion.svg></span><br />НАЧАЛЕ
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
