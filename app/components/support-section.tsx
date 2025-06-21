import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp } from "~/lib/animations";
import { useTranslation } from "react-i18next";
import { TextWithTags } from "~/components/ui/text-with-tags";

export function SupportSection() {
  const { t } = useTranslation();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.section
        id="donate"
        className="pt-32 pb-40 px-6 sm:px-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="absolute top-20 left-1/4 w-24 h-24 border-2 border-primary/30 rounded-full"></div>
        <div className="absolute bottom-30 right-1/3 w-16 h-16 bg-accent/10 rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-4 h-32 bg-gradient-to-b from-secondary to-transparent opacity-40 rounded-full"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-14 relative z-10">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"></div>
            <h2 className="text-center text-3xl sm:text-4xl font-semibold relative">
              {t('supportTitle')}
            </h2>
            <div className="absolute -bottom-3 -right-8 w-12 h-12 border border-primary/40 rounded-full"></div>
          </div>
          <p className="text-center max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-100">
            <TextWithTags content={t('supportDesc')} />
          </p>
          <a
            href="https://ko-fi.com/daichan132"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-2xl rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] hover:-rotate-1 transition-all duration-500 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={`${import.meta.env.BASE_URL}daichan132-Sharable-Profile)-Horizontal.jpg`}
              alt={t('supportImgAlt')}
              className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </m.section>
    </LazyMotion>
  );
}