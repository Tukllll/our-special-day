import { motion } from "framer-motion";
import prince from "@/assets/prince.webp";
import astronaut from "@/assets/astronaut.webp";
import rocket from "@/assets/rocket.webp";
import slon from "@/assets/slon.webp";

const QuotesSection = () => {
  const quotes = [
    {
      text: "А если все пойдут прыгать с 5 этажа, ты тоже пойдёшь?",
    },
    {
      text: "Тили-тили тесто — жених и невеста!",
    },
  ];

  const floatingImages = [
    { src: astronaut, className: "top-[10%] left-[5%] w-60 md:w-80", delay: 0 },
    { src: rocket, className: "top-[20%] right-[8%] w-48 md:w-72", delay: 1 },
    { src: slon, className: "bottom-[25%] left-[10%] w-72 md:w-96", delay: 2 },
  ];

  return (
    <section 
      className="wedding-section relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Floating images on background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingImages.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt=""
            className={`absolute opacity-90 ${img.className}`}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: img.delay,
            }}
          />
        ))}
      </div>

      {/* Static prince in bottom right */}
      <img
        src={prince}
        alt="Маленький принц"
        className="absolute bottom-0 right-0 w-80 md:w-[30rem] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto px-6 text-center relative z-10"
      >
        <div className="space-y-16">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-2xl md:text-3xl leading-relaxed">
                «{quote.text}»
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuotesSection;
