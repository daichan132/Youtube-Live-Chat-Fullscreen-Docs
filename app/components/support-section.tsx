import { motion } from "framer-motion";
import { fadeUp } from "~/lib/animations";
import { useTranslation } from "react-i18next";
import { TextWithTags } from "~/components/ui/text-with-tags";

export function SupportSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="donate"
      className="pt-32 pb-40 px-6 sm:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-14">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold">
          {t('supportTitle')}
        </h2>
        <p className="text-center max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-100">
          <TextWithTags content={t('supportDesc')} />
        </p>
        <a
          href="https://ko-fi.com/daichan132"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl hover:opacity-90 hover:shadow-fuchsia-500/20 transition duration-200"
        >
          <img
            src="/daichan132-Sharable-Profile)-Horizontal.jpg"
            alt={t('supportImgAlt')}
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </motion.section>
  );
}