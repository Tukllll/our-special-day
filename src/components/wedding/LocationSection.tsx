import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, MapPinned } from "lucide-react";
import { useRef } from "react";
import churchImage from "@/assets/church.png";

const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const details = [
    {
      icon: "📅",
      label: "Дата",
      value: "27 мая 2025",
      subtext: "вторник"
    },
    {
      icon: "🕐",
      label: "Время",
      value: "15:00",
      subtext: "сбор гостей"
    },
    {
      icon: "📍",
      label: "Место",
      value: "Ресторан «Название»",
      subtext: "ул. Примерная, 123"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex items-center"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Parallax background image - grayscale */}
      <motion.div 
        className="fixed inset-0 w-full h-[120%] -top-[10%] -z-10"
        style={{ y: backgroundY }}
      >
        <img 
          src={churchImage} 
          alt="Church" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content - left aligned */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl px-6 py-12 md:px-12"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-foreground/60" />
          <div className="h-px flex-1 bg-foreground/20 max-w-[100px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-title text-left mb-4"
        >
          —— мы женимся!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-left text-muted-foreground mb-12 leading-relaxed text-lg"
        >
          И будем рады видеть тебя на нашем празднике
        </motion.p>

        <div className="space-y-4">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div 
                className="relative flex items-center gap-5 p-5 backdrop-blur-md overflow-hidden"
                style={{ 
                  background: "linear-gradient(135deg, hsl(var(--background) / 0.9) 0%, hsl(var(--card) / 0.85) 100%)",
                  borderLeft: "3px solid hsl(var(--foreground) / 0.3)",
                }}
              >
                {/* Emoji icon */}
                <div className="text-3xl md:text-4xl flex-shrink-0">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-xl md:text-2xl text-foreground font-medium">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.subtext}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/10" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wedding-btn inline-flex items-center gap-2"
          >
            <MapPinned className="w-4 h-4" />
            Открыть карту
          </a>
          
          <Heart className="w-5 h-5 text-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocationSection;