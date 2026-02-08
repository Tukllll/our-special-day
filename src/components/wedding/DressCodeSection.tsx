import { motion } from "framer-motion";

const DressCodeSection = () => {
  const palette = [
    { color: "hsl(150, 25%, 35%)", name: "Тёмный лес" },
    { color: "hsl(140, 15%, 55%)", name: "Шалфей" },
    { color: "hsl(120, 5%, 75%)", name: "Камень" },
    { color: "hsl(60, 20%, 96%)", name: "Крем" },
    { color: "hsl(145, 20%, 85%)", name: "Мята" },
  ];

  return (
    <section 
      className="wedding-section"
      style={{ background: "hsl(var(--wedding-cream))" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto w-full text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          Дресс-код
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="wedding-title mb-6"
        >
          Палитра праздника
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-10 leading-relaxed"
        >
          Мы будем рады, если ваш наряд будет в нежных, пастельных тонах. 
          Вот палитра, которая задаст настроение нашему дню:
        </motion.p>

        {/* Color palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-8"
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
                className="palette-swatch mb-2"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[10px] text-muted-foreground max-w-[60px] leading-tight">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="wedding-card text-left"
        >
          <h3 className="font-serif text-lg mb-4 text-center">Рекомендации</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-wedding-sage text-lg">✓</span>
              <div>
                <p className="font-medium text-sm">Для девушек</p>
                <p className="text-sm text-muted-foreground">
                  Платья в пол или миди, элегантные костюмы
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-wedding-sage text-lg">✓</span>
              <div>
                <p className="font-medium text-sm">Для мужчин</p>
                <p className="text-sm text-muted-foreground">
                  Классический костюм, можно без галстука
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-wedding-charcoal text-lg">✗</span>
              <div>
                <p className="font-medium text-sm">Просим избегать</p>
                <p className="text-sm text-muted-foreground">
                  Белый цвет и чёрный total look
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DressCodeSection;