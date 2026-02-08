import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heartOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heartScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="wedding-section relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--wedding-cream)) 0%, hsl(var(--wedding-blush)) 100%)",
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

      {/* Heart that fades on scroll */}
      <motion.div
        style={{ opacity: heartOpacity, scale: heartScale }}
        className="relative flex items-center justify-center my-8"
      >
        <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-52 md:h-52">
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(350, 35%, 65%)" />
              <stop offset="100%" stopColor="hsl(350, 25%, 75%)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M50 88 C20 60 5 40 15 25 C25 10 40 15 50 30 C60 15 75 10 85 25 C95 40 80 60 50 88Z"
            fill="url(#heartGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>

        {/* Animated sparkles around heart */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 bg-wedding-gold rounded-full"
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
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-6 flex flex-col items-center"
      >
        <p className="text-sm text-muted-foreground mb-2">листайте вниз</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-wedding-rose"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Date reveal */}
      <motion.div style={{ opacity: textOpacity }} className="mt-12 text-center">
        <p className="wedding-title text-5xl md:text-6xl">27 мая</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
