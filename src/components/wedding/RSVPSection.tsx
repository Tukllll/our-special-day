import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Спасибо! Ваш ответ отправлен 💕");
  };

  if (isSubmitted) {
    return (
      <section 
        className="wedding-section"
        style={{ 
          background: "linear-gradient(180deg, hsl(var(--wedding-cream)) 0%, hsl(var(--wedding-mint)) 100%)" 
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: "hsl(var(--wedding-sage) / 0.2)" }}
          >
            <svg className="w-10 h-10 text-wedding-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </motion.div>
          
          <h2 className="wedding-title mb-4">Спасибо!</h2>
          <p className="wedding-subtitle">Мы получили ваш ответ</p>
          <p className="text-muted-foreground mt-4">Ждём вас на нашем празднике 💕</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section 
      className="min-h-screen py-16 px-6 flex flex-col justify-center"
      style={{ background: "hsl(var(--background))" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10"
        >
          Анкета гостя
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="wedding-title mb-4"
        >
          Ваше присутствие
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 text-sm tracking-wide"
        >
          Пожалуйста, заполните анкету до 15 мая
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-0"
          style={{ fontFamily: 'var(--font-form)' }}
        >
          {/* Name */}
          <div className="py-5 border-b border-foreground/10">
            <div className="flex items-baseline gap-4">
              <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-20 flex-shrink-0">
                Имя
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Иван Иванов"
                className="border-0 border-b border-foreground/20 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground/50 text-base"
              />
            </div>
          </div>

          {/* Attending */}
          <div className="py-5 border-b border-foreground/10">
            <div className="flex items-start gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-20 flex-shrink-0 pt-0.5">
                Визит
              </p>
              <RadioGroup
                value={formData.attending}
                onValueChange={(value) => setFormData({ ...formData, attending: value })}
                className="flex-1 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="yes" className="border-foreground/30 text-foreground" />
                  <Label htmlFor="yes" className="text-sm cursor-pointer">Да, с радостью! 🎉</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="maybe" id="maybe" className="border-foreground/30 text-foreground" />
                  <Label htmlFor="maybe" className="text-sm cursor-pointer">Пока не уверен(а)</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="no" className="border-foreground/30 text-foreground" />
                  <Label htmlFor="no" className="text-sm cursor-pointer">К сожалению, не смогу</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {formData.attending === "yes" && (
            <>
              {/* Alcohol preference */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="py-5 border-b border-foreground/10"
              >
                <div className="flex items-start gap-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-20 flex-shrink-0 pt-0.5">
                    Напитки
                  </p>
                  <RadioGroup
                    value={formData.alcohol}
                    onValueChange={(value) => setFormData({ ...formData, alcohol: value })}
                    className="flex-1 space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="wine" id="wine" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="wine" className="text-sm cursor-pointer">Вино 🍷</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="champagne" id="champagne" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="champagne" className="text-sm cursor-pointer">Шампанское 🥂</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="strong" id="strong" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="strong" className="text-sm cursor-pointer">Крепкие напитки 🥃</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="none" id="noalcohol" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="noalcohol" className="text-sm cursor-pointer">Безалкогольные 🍹</Label>
                    </div>
                  </RadioGroup>
                </div>
              </motion.div>

              {/* Food preference */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="py-5 border-b border-foreground/10"
              >
                <div className="flex items-start gap-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-20 flex-shrink-0 pt-0.5">
                    Еда
                  </p>
                  <RadioGroup
                    value={formData.food}
                    onValueChange={(value) => setFormData({ ...formData, food: value })}
                    className="flex-1 space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="meat" id="meat" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="meat" className="text-sm cursor-pointer">Мясо 🥩</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="fish" id="fish" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="fish" className="text-sm cursor-pointer">Рыба 🐟</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="vegan" id="vegan" className="border-foreground/30 text-foreground" />
                      <Label htmlFor="vegan" className="text-sm cursor-pointer">Вегетарианское 🥗</Label>
                    </div>
                  </RadioGroup>
                </div>
              </motion.div>
            </>
          )}

          {/* Wishes */}
          <div className="py-5 border-b border-foreground/10">
            <div className="flex items-start gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground w-20 flex-shrink-0 pt-2">
                Заметки
              </p>
              <Textarea
                id="wishes"
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                placeholder="Аллергия или особые пожелания?"
                className="flex-1 border-0 border-b border-foreground/20 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground/50 min-h-[80px] resize-none text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-10">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/30 text-foreground uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ◌
                  </motion.span>
                  Отправляем...
                </span>
              ) : (
                "Отправить ответ"
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-muted-foreground mt-12"
        >
          С любовью и нетерпением ждём встречи! 💕
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RSVPSection;