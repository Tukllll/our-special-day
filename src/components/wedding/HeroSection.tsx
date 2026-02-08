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
    <section
      className="wedding-section relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--wedding-cream)) 0%, hsl(var(--wedding-mint)) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 w-2 h-2 rounded-full bg-primary/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-8 w-3 h-3 rounded-full bg-primary/40"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="wedding-subtitle mb-8 text-center"
      >
        в самом начале...
      </motion.p>

      {/* Scratch card heart - centered */}
      <div className="flex items-center justify-center flex-1">
        <ScratchCard
          width={256}
          height={256}
          image={heartImage}
          finishPercent={99}
          onComplete={handleComplete}
          brushSize={30}
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(var(--wedding-cream))] to-[hsl(var(--wedding-mint))]">
            <p className="wedding-title text-4xl md:text-5xl text-center">
              27 mai
            </p>
          </div>
        </ScratchCard>
      </div>

      {/* Scroll hint - at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-sm text-muted-foreground mb-2">
          {isRevealed ? "листайте вниз" : "сотрите сердце"}
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
