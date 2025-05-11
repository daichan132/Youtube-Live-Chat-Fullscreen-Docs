import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp } from "~/lib/animations";
import { useTranslation } from "react-i18next";
import { HeroButtons } from "~/components/ui/cta-button";
import { TextWithTags } from "~/components/ui/text-with-tags";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.section
        className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 pt-24 pb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <m.h1 className="text-center text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          {t('heroTitle')}
        </m.h1>
        <m.p className="max-w-xl text-center text-base sm:text-lg text-neutral-700 dark:text-neutral-100 mb-10">
          <TextWithTags content={t('heroDesc')} />
        </m.p>
        {/* CTA */}
        <m.div variants={fadeUp}>
          <HeroButtons />
        </m.div>
      </m.section>
    </LazyMotion>
  );
}