import { motion } from "framer-motion";
import { FaComments, FaEdit, FaArrowsAlt } from "react-icons/fa";
import { fadeUp } from "~/lib/animations";
import type { Dictionary } from "~/lib/i18n";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}

export function FeatureCard({ icon, title, desc, index }: FeatureCardProps) {
  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-xl border border-neutral-300/40 dark:border-white/10 bg-white/90 dark:bg-[#181818]/90 backdrop-blur p-8 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:scale-[1.03] transition-transform"
    >
      <div className="text-3xl text-violet-600 dark:text-violet-400 mb-2 flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-semibold text-base text-[#141414]/90 dark:text-white/90">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {desc}
      </p>
    </motion.article>
  );
}

export function FeatureSection({ t }: { t: Dictionary }) {
  const features = t.features.map((f) => ({
    ...f,
    icon:
      f.icon === "FaComments"
        ? <FaComments />
        : f.icon === "FaEdit"
          ? <FaEdit />
          : <FaArrowsAlt />,
  }));

  return (
    <section id="features" className="pt-28 pb-36 px-4">
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-semibold mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {t.featuresTitle}
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {features.map((f, i) => (
          <FeatureCard
            key={f.title}
            icon={f.icon}
            title={f.title}
            desc={f.desc}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}