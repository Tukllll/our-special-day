import { motion } from "framer-motion";
import man1 from "@/assets/man-1.webp";
import man2 from "@/assets/man-2.webp";
import man3 from "@/assets/man-3.webp";
import man4 from "@/assets/man-4.webp";
import woman1 from "@/assets/woman-1.webp";
import woman2 from "@/assets/woman-2.webp";
import woman3 from "@/assets/woman-3.webp";
import woman4 from "@/assets/woman-4.webp";

const DressCodeSection = () => {
  const menImages = [man1, man2, man3, man4];
  const womenImages = [woman1, woman2, woman3, woman4];
  
  const palette = [
    { color: "hsl(30, 25%, 75%)" },
    { color: "hsl(40, 30%, 85%)" },
    { color: "hsl(45, 35%, 90%)" },
    { color: "hsl(20, 20%, 80%)" },
    { color: "hsl(0, 0%, 98%)" },
  ];

  return (
    <section 
      className="h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
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
              className="flex flex-col items-center"
            >
              <div 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10"
                style={{ backgroundColor: item.color }}
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
          <div className="grid grid-cols-2 gap-2 md:gap-8 items-end overflow-hidden">
            {/* Men - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-4">Для него</p>
              <div className="flex justify-center items-end -space-x-16 md:-space-x-28">
                {menImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Мужской образ ${index + 1}`}
                    className="w-full h-auto object-contain"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  />
                ))}
              </div>
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
              <div className="flex justify-center items-end -space-x-[120px]">
                {womenImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Женский образ ${index + 1}`}
                    className={`w-full h-auto object-contain ${index === 0 ? 'mr-[-10px]' : ''} ${index === 3 ? 'ml-[10px]' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  />
                ))}
              </div>
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
