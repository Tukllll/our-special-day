import { motion } from "framer-motion";
import { useState } from "react";

import ScratchCard from "react-scratchcard-v2";
import heartImage from "@/assets/heart.png";
import birdImage from "@/assets/bird.webp";

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
          {/* Bird hopping on letters */}
          <motion.img
            src={birdImage}
            alt="Птичка"
            className="absolute w-8 md:w-12 h-auto z-10"
            style={{ bottom: "100%", left: "0%" }}
            animate={{ 
              x: ["0%", "0%", "120%", "120%", "200%", "200%", "280%", "280%", "360%", "360%", "440%", "440%", "600%", "800%"],
              y: [0, -30, -30, 0, 0, -30, -30, 0, 0, -30, -30, 0, -150, -350],
              rotate: [0, -5, -5, 0, 0, -5, -5, 0, 0, -5, -5, 0, -20, -30],
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatDelay: 3,
              times: [0, 0.08, 0.12, 0.2, 0.24, 0.32, 0.36, 0.44, 0.48, 0.56, 0.6, 0.68, 0.84, 1],
              ease: "easeInOut"
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-bold tracking-widest uppercase text-muted-foreground mb-6"
          >
            В САМОМ<br />НАЧАЛЕ
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
