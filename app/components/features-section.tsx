import { LazyMotion, domAnimation, m } from "framer-motion";
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
    <m.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-2xl border border-border bg-card/95 backdrop-blur p-8 flex flex-col items-center text-center gap-4 hover:shadow-xl hover:shadow-primary/15 hover:scale-[1.03] hover:-rotate-1 transition-all duration-500 focus-within:ring-2 focus-within:ring-primary relative overflow-hidden group"
      tabIndex={0}
    >
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-secondary/40 rotate-45 group-hover:rotate-180 transition-transform duration-700"></div>
      
      <div className="text-4xl text-primary mb-3 flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-card-foreground relative z-10 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed relative z-10">
        {desc}
      </p>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 left-4 w-1 h-12 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
    </m.article>
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
    <LazyMotion features={domAnimation} strict>
      <section id="features" className="pt-20 pb-28 px-6 sm:px-10 relative wave-shape">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary to-transparent rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-accent/30 rotate-45"></div>
        
        <m.h2
          className="text-center text-3xl sm:text-4xl font-semibold mb-14 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          {t('featuresTitle')}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 border border-accent/40 rounded-full"></div>
        </m.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
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
    </LazyMotion>
  );
}