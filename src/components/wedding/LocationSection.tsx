import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
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
      icon: Calendar,
      label: "Дата",
      value: "27 мая 2025",
      subtext: "вторник"
    },
    {
      icon: Clock,
      label: "Время",
      value: "15:00",
      subtext: "сбор гостей"
    },
    {
      icon: MapPin,
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
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content - left aligned */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl px-6 py-12 md:px-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-title text-left mb-4"
        >
          Ну вот мы и женимся!
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

        <div className="space-y-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-start gap-4 bg-background/80 backdrop-blur-sm p-4 border border-border"
            >
              <div 
                className="w-12 h-12 flex items-center justify-center flex-shrink-0 border border-foreground/20"
              >
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-2xl text-foreground">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {item.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wedding-btn inline-flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Открыть карту
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocationSection;