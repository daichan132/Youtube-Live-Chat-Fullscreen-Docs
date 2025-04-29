import { motion } from "framer-motion";
import { fadeUp } from "~/lib/animations";
import type { Dictionary } from "~/lib/i18n";

export function SupportSection({ t }: { t: Dictionary }) {
  return (
    <motion.section
      id="donate"
      className="pt-44 pb-72 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold">
          {t.supportTitle}
        </h2>

        <p
          className="text-center max-w-2xl text-sm sm:text-base text-neutral-600 dark:text-neutral-300"
          dangerouslySetInnerHTML={{ __html: t.supportDesc }}
        />

        <a
          href="https://ko-fi.com/daichan132"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl hover:opacity-90 transition"
        >
          <img
            src="/daichan132-Sharable-Profile)-Horizontal.jpg"
            alt={t.supportImgAlt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
      </div>
    </motion.section>
  );
}