import { motion, useScroll, useTransform } from "framer-motion";
import { MapPinned } from "lucide-react";
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
      label: "Дата",
      value: "27 мая 2026",
      subtext: "среда",
    },
    {
      label: "Время и место встречи",
      value: "14:00",
      subtext: "сбор гостей на парковке Национальной библиотеки и трансфер на площадку",
    },
    {
      label: "Локация",
      value: "Усадьба Богдановичей",
      subtext: "ул. Примерная, 123",
    },
    {
      label: "Ночёвка",
      value: "Предусмотрена",
      subtext: "на территории усадьбы",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen h-screen relative flex items-center"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Parallax background image - grayscale */}
      <motion.div className="fixed inset-0 w-full h-[120%] -top-[10%] -z-10 pointer-events-none" style={{ y: backgroundY }}>
        <img
          src={churchImage}
          alt="Church"
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content - left aligned */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-xl px-6 py-12 md:px-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-white mb-10"
        >
          Когда и где
        </motion.h2>

        <div className="space-y-1">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-baseline gap-4 py-4 border-b border-white/10"
            >
              {/* Label */}
              <p className="text-lg md:text-xl uppercase tracking-[0.2em] text-white/80 font-black w-28 flex-shrink-0">{item.label}</p>

              {/* Value */}
              <div className="flex-1">
                <p className="text-2xl md:text-3xl text-white font-semibold tracking-[0.08em]">{item.value}</p>
                <p className="text-white/70 mt-0.5 tracking-[0.06em]" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px" }}>{item.subtext}</p>
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
            href="https://yandex.com.tr/maps/157/minsk/?ll=27.649400%2C53.931583&mode=whatshere&whatshere%5Bpoint%5D=27.648788%2C53.931929&whatshere%5Bzoom%5D=17&z=17.57"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all"
          >
            <MapPinned className="w-4 h-4" />
            Точка встречи
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
