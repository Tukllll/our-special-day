import { motion } from "framer-motion";

const QuotesSection = () => {
  const quotes = [
    {
      text: "«А если все пойдут прыгать с 5 этажа, ты тоже пойдёшь?»",
      author: "— Мама"
    },
    {
      text: "«Тили-тили тесто — жених и невеста!»",
      author: "— Все вокруг"
    }
  ];

  return (
    <section 
      className="wedding-section"
      style={{ background: "hsl(var(--wedding-cream))" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12"
        >
          Знакомые фразы
        </motion.p>

        <div className="space-y-12">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative"
            >
              {/* Decorative quote mark */}
              <span 
                className="absolute -top-6 -left-2 text-6xl font-serif opacity-10"
                style={{ color: "hsl(var(--wedding-rose))" }}
              >
                "
              </span>
              
              <p className="wedding-quote px-4">
                {quote.text}
              </p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.3 }}
                className="mt-3 text-sm text-muted-foreground"
              >
                {quote.author}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-wedding-rose/30" />
            <svg 
              className="w-6 h-6 text-wedding-rose" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="w-12 h-px bg-wedding-rose/30" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-8 wedding-subtitle text-lg"
        >
          Ну вот мы и здесь...
        </motion.p>
      </motion.div>
    </section>
  );
};

export default QuotesSection;