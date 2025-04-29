import { motion } from "framer-motion";
import { fadeUp } from "~/lib/animations";
import type { Dictionary } from "~/lib/i18n";
import { HeroButtons } from "~/components/ui/cta-button";

export function HeroSection({ t }: { t: Dictionary }) {
  return (
    <motion.section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-4"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <motion.h1 className="text-center text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
        {t.heroTitle}
      </motion.h1>
      <motion.p
        className="max-w-md text-center text-neutral-600 dark:text-neutral-300 mb-10"
        dangerouslySetInnerHTML={{ __html: t.heroDesc }}
      />

      {/* CTA */}
      <motion.div
        variants={fadeUp}
      >
        <HeroButtons t={t} />
      </motion.div>
    </motion.section>
  );
}