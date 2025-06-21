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
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/15 rotate-45 blur-2xl"></div>
        
        <m.div className="relative z-10 flex flex-col items-center">
          <m.div className="mb-8 relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-primary/30 rounded-full"></div>
            <div className="absolute -bottom-2 -right-6 w-8 h-8 bg-accent rotate-45"></div>
            <h1 className="text-center text-4xl sm:text-6xl font-display relative">
              {t('heroTitle')}
            </h1>
          </m.div>
          
          <m.p className="max-w-xl text-center text-base sm:text-lg text-muted-foreground mb-10 relative">
            <div className="absolute -left-8 top-0 w-2 h-full bg-gradient-to-b from-primary to-accent opacity-30 rounded-full"></div>
            <TextWithTags content={t('heroDesc')} />
          </m.p>
          
          {/* CTA */}
          <m.div variants={fadeUp} className="relative">
            <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-secondary/40 rotate-12"></div>
            <HeroButtons />
          </m.div>
        </m.div>
      </m.section>
    </LazyMotion>
  );
}