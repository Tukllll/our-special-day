import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import heartImage from "@/assets/heart.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heartOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heartScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const handleComplete = () => {
    setIsRevealed(true);
  };

  return (
    <section
      ref={sectionRef}
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
        <motion.div
          className="absolute bottom-40 left-10 w-2 h-2 rounded-full bg-accent/30"
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

      {/* Scratch card heart */}
      <motion.div
        style={{ opacity: heartOpacity, scale: heartScale }}
        className="relative flex items-center justify-center my-8"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64">
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

        {/* Animated sparkles around heart */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 bg-accent rounded-full"
              style={{
                top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 45}%`,
                left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 45}%`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0.5 }}
        transition={{ delay: 2 }}
        className="mt-6 flex flex-col items-center"
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

      {/* Date reveal after scroll */}
      <motion.div style={{ opacity: textOpacity }} className="mt-12 text-center">
        <p className="wedding-title text-5xl md:text-6xl">27 mai</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
