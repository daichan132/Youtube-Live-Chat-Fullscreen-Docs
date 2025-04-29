import { motion } from "framer-motion";
import { fadeUp } from "~/lib/animations";
import { useTranslation } from "react-i18next";
import { HeroButtons } from "~/components/ui/cta-button";
import { TextWithTags } from "~/components/ui/text-with-tags";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 pt-24 pb-20"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <motion.h1 className="text-center text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
        {t('heroTitle')}
      </motion.h1>
      <motion.p className="max-w-xl text-center text-base sm:text-lg text-neutral-700 dark:text-neutral-100 mb-10">
        <TextWithTags content={t('heroDesc')} />
      </motion.p>
      {/* CTA */}
      <motion.div variants={fadeUp}>
        <HeroButtons />
      </motion.div>
    </motion.section>
  );
}