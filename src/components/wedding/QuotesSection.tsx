import { motion } from "framer-motion";

const QuotesSection = () => {
  const quotes = [
    {
      text: "А если все пойдут прыгать с 5 этажа, ты тоже пойдёшь?",
      author: "— Мама",
      rotation: -2,
    },
    {
      text: "Тили-тили тесто — жених и невеста!",
      author: "— Одноклассники",
      rotation: 1.5,
    },
  ];

  return (
    <section 
      className="wedding-section py-20"
      style={{ background: "hsl(var(--background))" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-6"
      >
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mb-4"
        >
          Из детства
        </motion.p>
        
        {/* Quotes as handwritten notes */}
        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Paper note effect */}
              <div 
                className="relative p-8 md:p-10 border-2 border-foreground/10"
                style={{ 
                  background: "hsl(var(--card))",
                  boxShadow: "4px 4px 0px hsl(var(--foreground) / 0.1)",
                }}
              >
                {/* Decorative tape */}
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 opacity-60"
                  style={{ 
                    background: "linear-gradient(90deg, transparent 0%, hsl(50, 50%, 85%) 10%, hsl(50, 50%, 85%) 90%, transparent 100%)",
                  }}
                />
                
                {/* Quote text */}
                <p 
                  className="text-xl md:text-2xl leading-relaxed text-center"
                  style={{ fontFamily: "var(--font-main)" }}
                >
                  «{quote.text}»
                </p>
                
                {/* Author */}
                <p className="text-sm text-muted-foreground text-right mt-4 italic">
                  {quote.author}
                </p>

                {/* Corner decoration */}
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-foreground/10" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-foreground/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuotesSection;
