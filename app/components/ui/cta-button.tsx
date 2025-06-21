import { Button } from "~/components/ui/button";
import { FaChrome, FaFirefox, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function CTAButton({
  href,
  icon,
  label,
  colour,
  outline = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  colour?: string; // tailwind gradient stops
  outline?: boolean;
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto hover:scale-[1.02] hover:rotate-1 active:scale-95 group overflow-hidden";

  const gradientBg = outline
    ? "border border-border bg-transparent text-foreground hover:bg-muted"
    : `bg-gradient-to-br ${colour} text-white shadow-md hover:shadow-lg hover:shadow-primary/20`;

  return (
    <Button asChild className={`${base} ${gradientBg}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -translate-x-full"></div>
        <span className="relative z-10 flex items-center gap-2">
          {icon}
          <span className="font-medium">{label}</span>
        </span>
      </a>
    </Button>
  );
}

export function HeroButtons() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <CTAButton
        href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
        icon={<FaChrome />}
        label={t('chrome')}
        colour="from-primary to-accent"
      />
      <CTAButton
        href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
        icon={<FaFirefox />}
        label={t('firefox')}
        colour="from-accent to-secondary"
      />
      <CTAButton
        href="https://github.com/daichan132/Youtube-Live-Chat-Fullscreen"
        icon={<FaGithub />}
        label={t('github')}
        outline
      />
    </div>
  );
}