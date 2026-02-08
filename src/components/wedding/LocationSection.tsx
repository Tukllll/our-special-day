import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

const LocationSection = () => {
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
      className="wedding-section"
      style={{ 
        background: "linear-gradient(180deg, hsl(var(--wedding-mint)) 0%, hsl(var(--wedding-cream)) 100%)" 
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-title text-center mb-4"
        >
          Ну вот мы и женимся!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 leading-relaxed"
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
              className="wedding-card flex items-start gap-4"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(var(--wedding-forest) / 0.15)" }}
              >
                <item.icon className="w-5 h-5 text-wedding-forest" />
              </div>
              
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-xl text-foreground">
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
            className="wedding-btn w-full flex items-center justify-center gap-2"
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