import { motion } from "framer-motion";
import { useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import heartImage from "@/assets/heart.png";

const HeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

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
          className="absolute top-10 left-5 w-2 h-2 rounded-full bg-wedding-forest/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-8 w-3 h-3 rounded-full bg-wedding-sage/40"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-2 h-2 rounded-full bg-wedding-stone/30"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-2xl mb-8 text-center text-muted-foreground"
      >
        v samom najale...
      </motion.p>

      {/* Scratch card with heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="relative">
          <ScratchCard
            width={280}
            height={280}
            image={heartImage}
            finishPercent={99}
            onComplete={() => setIsRevealed(true)}
            brushSize={30}
            fadeOutOnComplete
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center">
              <p className="wedding-title text-5xl md:text-6xl">27 мая</p>
            </div>
          </ScratchCard>
        </div>

        {!isRevealed && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            сотри сердце ♡
          </motion.p>
        )}
      </motion.div>

      {/* Scroll hint - appears after reveal */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">листайте вниз</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-wedding-forest"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
