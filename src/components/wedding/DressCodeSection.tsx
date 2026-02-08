import { motion } from "framer-motion";
import dresscodeWomen from "@/assets/dresscode-women-transparent.png";
import dresscodeMen from "@/assets/dresscode-men-transparent.png";

const DressCodeSection = () => {
  const palette = [
    { color: "hsl(25, 30%, 35%)", name: "Шоколад" },
    { color: "hsl(40, 20%, 70%)", name: "Беж" },
    { color: "hsl(55, 60%, 85%)", name: "Крем" },
    { color: "hsl(120, 20%, 55%)", name: "Шалфей" },
    { color: "hsl(0, 0%, 85%)", name: "Серебро" },
  ];

  return (
    <section 
      className="wedding-section py-16"
      style={{ background: "hsl(var(--background))" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mb-8"
        >
          Дресс-код
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="wedding-title text-center mb-6"
        >
          Палитра праздника
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-10 leading-relaxed max-w-md mx-auto"
        >
          Мы будем рады, если ваш наряд будет в нежных, природных тонах
        </motion.p>

        {/* Color palette - two rows like reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 md:gap-6 mb-12"
        >
          {palette.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              className="flex flex-col items-center gap-2"
            >
              {/* Solid color circle */}
              <div 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10"
                style={{ backgroundColor: item.color }}
              />
              {/* Texture circle */}
              <div 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10 overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${item.color} 0%, hsl(from ${item.color} h s calc(l + 20)) 50%, ${item.color} 100%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Dress code examples - men left, women right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-2 md:gap-8 items-end">
            {/* Men - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-4">Для него</p>
              <img
                src={dresscodeMen}
                alt="Примеры мужского дресс-кода"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Women - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-4">Для неё</p>
              <img
                src={dresscodeWomen}
                alt="Примеры женского дресс-кода"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Simple note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Просим избегать белый цвет и чёрный total look
        </motion.p>
      </motion.div>
    </section>
  );
};

export default DressCodeSection;
