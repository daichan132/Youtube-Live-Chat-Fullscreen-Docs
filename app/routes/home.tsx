import type { Route } from "./+types/home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GlowCursor, ThemeToggle } from "~/components/ui/theme";
import { LanguageSwitcher } from "~/components/ui/language-switcher";
import { HeroSection } from "~/components/hero-section";
import { FeatureSection } from "~/components/features-section";
import { SupportSection } from "~/components/support-section";

/* -------------------------------------------------------------------------- */
/*                                  meta                                      */
/* -------------------------------------------------------------------------- */
export const meta: Route.MetaFunction = () => {
  const { t } = useTranslation();
  return [
    { title: t('title') },
    {
      name: "description",
      content: t('description'),
    },
  ];
};

/* -------------------------------------------------------------------------- */
/*                                  page                                      */
/* -------------------------------------------------------------------------- */
export default function Index() {
  const { t } = useTranslation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      /* disable global animations if preferred */
    }
  }, []);

  return (
    <>
      <GlowCursor />
      <ThemeToggle />
      <LanguageSwitcher />

      <main className="font-outfit bg-gray-50 text-[#141414] dark:bg-gray-950 dark:text-white selection:bg-cyan-500/40 dark:selection:bg-cyan-500/60">
        {/* ヒーローセクション */}
        <HeroSection />

        {/* 特徴セクション */}
        <FeatureSection />

        {/* サポートセクション */}
        <SupportSection />
      </main>
    </>
  );
}
