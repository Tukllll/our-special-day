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

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-muted-foreground mb-8 text-center"
      >
        В САМОМ НАЧАЛЕ...
      </motion.p>

      {/* Scratch card heart - centered */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-center flex-1"
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
              <p className="text-3xl md:text-4xl font-bold tracking-widest uppercase wedding-accent">
                27 МАЯ
              </p>
            </div>
          </ScratchCard>
          
          {/* Blue accent line */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: isRevealed ? 120 : 60 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Scroll hint - at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
          {isRevealed ? "ЛИСТАЙТЕ ВНИЗ" : "СОТРИТЕ СЕРДЦЕ"}
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
