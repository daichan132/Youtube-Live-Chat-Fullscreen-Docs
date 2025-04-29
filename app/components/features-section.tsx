import { motion } from "framer-motion";
import { FaComments, FaEdit, FaArrowsAlt } from "react-icons/fa";
import { fadeUp } from "~/lib/animations";
import { useTranslation } from "react-i18next";

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
      className="rounded-xl border border-neutral-300/40 dark:border-white/10 bg-white/90 dark:bg-[#181818]/90 backdrop-blur p-7 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:scale-105 transition duration-200 focus-within:ring-2 focus-within:ring-fuchsia-400"
      tabIndex={0}
    >
      <div className="text-3xl text-violet-600 dark:text-violet-400 mb-2 flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-[#141414]/90 dark:text-white/90">
        {title}
      </h3>
      <p className="text-base text-neutral-700 dark:text-neutral-100 leading-relaxed">
        {desc}
      </p>
    </motion.article>
  );
}

export function FeatureSection() {
  const { t } = useTranslation();

  // JSONからデータを取得して変換
  const features = t('features', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  // アイコンをReactコンポーネントに変換
  const featureItems = features.map((f) => ({
    ...f,
    icon:
      f.icon === "FaComments"
        ? <FaComments />
        : f.icon === "FaEdit"
          ? <FaEdit />
          : <FaArrowsAlt />,
  }));

  return (
    <section id="features" className="pt-20 pb-28 px-6 sm:px-10">
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-semibold mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {t('featuresTitle')}
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureItems.map((f, i) => (
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