import { motion } from "framer-motion";

const QuotesSection = () => {
  const quotes = [
    {
      text: "«А если все пойдут прыгать с 5 этажа, ты тоже пойдёшь?»"
    },
    {
      text: "«Тили-тили тесто — жених и невеста!»"
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
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default QuotesSection;