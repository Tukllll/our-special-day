import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const drinkMap: Record<string, string> = {
  wine: "🍷 Вино",
  champagne: "🥂 Шампанское",
  strong: "🥃 Крепкие",
  none: "🍹 Без алкоголя",
};

const foodMap: Record<string, string> = {
  meat: "🥩 Мясо",
  fish: "🐟 Рыба",
  vegan: "🥗 Вегетарианское",
};

const sendToTelegram = async (formData: {
  name: string;
  attending: string;
  alcohol: string;
  food: string;
  wishes: string;
}) => {
  const { name, attending, alcohol, food, wishes } = formData;
  const attendingText = attending === "yes" ? "✅ Да, с радостью" : "❌ Не смогу";

  let message = `💌 *Новый ответ на приглашение*\n\n`;
  message += `👤 *Имя:* ${name}\n`;
  message += `📋 *Присутствие:* ${attendingText}\n`;

  if (attending === "yes") {
    if (alcohol) message += `🍸 *Напитки:* ${drinkMap[alcohol] || alcohol}\n`;
    if (food) message += `🍽 *Еда:* ${foodMap[food] || food}\n`;
  }

  if (wishes) message += `💬 *Пожелания:* ${wishes}\n`;

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram API error: ${err}`);
  }
};

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    alcohol: "",
    food: "",
    wishes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Пожалуйста, введите ваше имя");
      return;
    }

    if (!formData.attending) {
      toast.error("Пожалуйста, укажите, будете ли вы присутствовать");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendToTelegram(formData);
      setIsSubmitted(true);
      toast.success("Спасибо! Ваш ответ отправлен 💕");
    } catch (err) {
      console.error(err);
      toast.error("Ошибка при отправке. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen py-16 px-6 flex flex-col justify-center" style={{ background: "hsl(var(--background))" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center border border-foreground/10"
            style={{ background: "hsl(var(--muted))" }}
          >
            <svg className="w-10 h-10" style={{ color: "hsl(var(--foreground))" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </motion.div>
          <h2 className="wedding-title mb-4">Спасибо!</h2>
          <p className="wedding-subtitle">Мы получили ваш ответ</p>
          <p className="text-muted-foreground mt-6 text-sm">Ждём вас на нашем празднике 💕</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 flex flex-col justify-center" style={{ background: "hsl(var(--background))" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto w-full"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            Анкета гостя
          </p>
          <h2 className="wedding-title mb-3">Ваше присутствие</h2>
          <p className="text-muted-foreground text-sm tracking-wide">
            Пожалуйста, заполните до 15 мая
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          style={{ fontFamily: 'var(--font-form)' }}
        >
          {/* Name field */}
          <FormField label="Ваше имя" delay={0}>
            <input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Имя и фамилия"
              className="w-full bg-transparent border-b border-foreground/15 pb-2 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-foreground/40 transition-colors"
              style={{ color: "hsl(var(--foreground))" }}
            />
          </FormField>

          {/* Attending */}
          <FormField label="Сможете ли вы прийти?" delay={0.05}>
            <div className="flex flex-wrap gap-2">
              <ChipOption
                selected={formData.attending === "yes"}
                onClick={() => setFormData({ ...formData, attending: "yes" })}
                label="Да, с радостью 🎉"
              />
              <ChipOption
                selected={formData.attending === "no"}
                onClick={() => setFormData({ ...formData, attending: "no" })}
                label="Не смогу 😔"
              />
            </div>
          </FormField>

          <AnimatePresence>
            {formData.attending === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 overflow-hidden"
              >
                {/* Drinks */}
                <FormField label="Предпочтения по напиткам" delay={0}>
                  <div className="flex flex-wrap gap-2">
                    <ChipOption selected={formData.alcohol === "wine"} onClick={() => setFormData({ ...formData, alcohol: "wine" })} label="Вино 🍷" />
                    <ChipOption selected={formData.alcohol === "champagne"} onClick={() => setFormData({ ...formData, alcohol: "champagne" })} label="Шампанское 🥂" />
                    <ChipOption selected={formData.alcohol === "strong"} onClick={() => setFormData({ ...formData, alcohol: "strong" })} label="Крепкие 🥃" />
                    <ChipOption selected={formData.alcohol === "none"} onClick={() => setFormData({ ...formData, alcohol: "none" })} label="Без алкоголя 🍹" />
                  </div>
                </FormField>

                {/* Food */}
                <FormField label="Предпочтения по еде" delay={0.05}>
                  <div className="flex flex-wrap gap-2">
                    <ChipOption selected={formData.food === "meat"} onClick={() => setFormData({ ...formData, food: "meat" })} label="Мясо 🥩" />
                    <ChipOption selected={formData.food === "fish"} onClick={() => setFormData({ ...formData, food: "fish" })} label="Рыба 🐟" />
                    <ChipOption selected={formData.food === "vegan"} onClick={() => setFormData({ ...formData, food: "vegan" })} label="Вегетарианское 🥗" />
                  </div>
                </FormField>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wishes */}
          <FormField label="Заметки или пожелания" delay={0.1}>
            <textarea
              value={formData.wishes}
              onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
              placeholder="Аллергия, особые пожелания..."
              rows={3}
              className="w-full bg-transparent border border-foreground/10 rounded-lg p-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-foreground/30 transition-colors resize-none"
              style={{ color: "hsl(var(--foreground))" }}
            />
          </FormField>

          {/* Submit */}
          <motion.div className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 text-sm uppercase tracking-[0.25em] font-medium border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>◌</motion.span>
                  Отправляем...
                </span>
              ) : (
                "Отправить"
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-10 tracking-wide"
        >
          С любовью и нетерпением ждём встречи 💕
        </motion.p>
      </motion.div>
    </section>
  );
};

/* ── Sub-components ── */

const FormField = ({ label, delay = 0, children }: { label: string; delay?: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
      {label}
    </label>
    {children}
  </motion.div>
);

const ChipOption = ({ selected, onClick, label }: { selected: boolean; onClick: () => void; label: string }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      px-4 py-2 text-sm border transition-all duration-200 rounded-full
      ${selected
        ? "bg-foreground text-background border-foreground"
        : "bg-transparent border-foreground/15 hover:border-foreground/40"
      }
    `}
    style={!selected ? { color: "hsl(var(--foreground))" } : undefined}
  >
    {label}
  </button>
);

export default RSVPSection;
