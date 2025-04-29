import { Button } from "~/components/ui/button";
import { FaChrome, FaFirefox, FaGithub } from "react-icons/fa";
import type { Dictionary } from "~/lib/i18n";

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
    "relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-medium transition-transform transform-gpu focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto";

  const gradientBg = outline
    ? "border border-neutral-700/40 dark:border-white/40 bg-transparent focus:ring-[#141414]"
    : `bg-gradient-to-br ${colour} text-white shadow-lg hover:brightness-110 focus:ring-violet-400`;

  return (
    <Button asChild className={`${base} ${gradientBg}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span>{label}</span>
      </a>
    </Button>
  );
}

export function HeroButtons({ t }: { t: Dictionary }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <CTAButton
        href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
        icon={<FaChrome />}
        label={t.chrome}
        colour="from-violet-500 to-fuchsia-500"
      />
      <CTAButton
        href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
        icon={<FaFirefox />}
        label={t.firefox}
        colour="from-orange-500 to-rose-500"
      />
      <CTAButton
        href="https://github.com/daichan132/Youtube-Live-Chat-Fullscreen"
        icon={<FaGithub />}
        label={t.github}
        outline
      />
    </div>
  );
}