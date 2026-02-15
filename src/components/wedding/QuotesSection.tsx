import { motion } from "framer-motion";
import prince from "@/assets/prince.webp";
import astronaut from "@/assets/astronaut-boy.webp";
import rocket from "@/assets/rocket.webp";
import slon from "@/assets/slon.webp";
import girlSinger from "@/assets/girl-singer.webp";

const QuotesSection = () => {

  return (
    <section 
      className="wedding-section relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Floating images on background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Astronaut - floating in space */}
        <motion.img
          src={astronaut}
          alt=""
          className="absolute top-[10%] left-[5%] w-40 md:w-52 opacity-90"
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 20, -10, 15, 0],
            rotate: [0, 15, -10, 8, 0],
            scale: [1, 1.05, 0.98, 1.02, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Rocket - diagonal flight from bottom-left to top-right */}
        <motion.img
          src={rocket}
          alt=""
          className="absolute w-32 md:w-48 opacity-90"
          style={{ bottom: "5%", left: "5%" }}
          animate={{
            x: ["0vw", "75vw", "75vw", "0vw"],
            y: ["0vh", "-80vh", "-80vh", "0vh"],
            rotate: [90, 90, 270, 270],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            times: [0, 0.45, 0.55, 1],
            ease: "easeInOut",
          }}
        />
        
        {/* Slon - moving left to right */}
        <motion.img
          src={slon}
          alt=""
          className="absolute -bottom-6 w-48 md:w-64 opacity-90"
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

      {/* Girl singer - top right, opposite astronaut */}
      <motion.img
        src={girlSinger}
        alt=""
        className="absolute pointer-events-none w-40 md:w-52 opacity-90"
        style={{ top: "calc(10% - 40px)", right: "5%" }}
        animate={{
          y: [0, -20, 10, -15, 0],
          x: [0, -15, 10, -10, 0],
          rotate: [0, -10, 8, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto px-6 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-title mb-8"
        >
          Мы выросли и женимся!
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl leading-relaxed text-justify">
            И хотим разделить этот день с самыми близкими и дорогими нам людьми. Приглашаем вас отпраздновать вместе с нами начало нашей семейной истории
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QuotesSection;
