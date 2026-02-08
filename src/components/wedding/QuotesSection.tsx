import { motion } from "framer-motion";

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
      {/* Placeholder for floating images - будут добавлены позже */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Детские картинки будут здесь */}
      </div>

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
