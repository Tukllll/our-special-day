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

  return (
    <section 
      className="wedding-section relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Floating images on background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Astronaut */}
        <motion.img
          src={astronaut}
          alt=""
          className="absolute top-[10%] left-[5%] w-40 md:w-52 opacity-90"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Rocket - launch up and return with rotation */}
        <motion.img
          src={rocket}
          alt=""
          className="absolute bottom-[10%] left-[15%] w-32 md:w-48 opacity-90"
          animate={{
            y: [0, -400, -400, 0],
            rotate: [-45, -45, 135, -45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.5, 1],
          }}
        />
        
        {/* Slon - moving left to right */}
        <motion.img
          src={slon}
          alt=""
          className="absolute bottom-[20%] w-48 md:w-64 opacity-90"
          animate={{
            x: ["-10vw", "90vw", "-10vw"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Static prince in bottom right corner */}
      <img
        src={prince}
        alt="Маленький принц"
        className="absolute pointer-events-none w-52 md:w-80"
        style={{ bottom: 0, right: -40 }}
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
