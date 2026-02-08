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
        background: "linear-gradient(180deg, hsl(var(--wedding-cream)) 0%, hsl(var(--wedding-blush)) 100%)" 
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-5 w-2 h-2 rounded-full bg-wedding-rose/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-32 right-8 w-3 h-3 rounded-full bg-wedding-sage/40"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-2 h-2 rounded-full bg-wedding-dusty/30"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
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

      {/* Scratchcard with heart */}
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
            finishPercent={40}
            brushSize={40}
            fadeOutOnComplete={true}
            onComplete={() => setIsRevealed(true)}
          >
            <div 
              className="flex items-center justify-center w-full h-full"
              style={{ 
                background: "linear-gradient(180deg, hsl(var(--wedding-cream)) 0%, hsl(var(--wedding-blush)) 100%)" 
              }}
            >
              <div className="text-center">
                <p className="wedding-title text-5xl md:text-6xl">27 мая</p>
                <p className="wedding-subtitle mt-2">2025</p>
              </div>
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
            сотрите сердечко ☝️
          </motion.p>
        )}
      </motion.div>

      {/* Animated reveal confirmation */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-wedding-rose"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
