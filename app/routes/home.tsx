import type { Route } from "./+types/home";
import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
  AnimatePresence,
} from "framer-motion";
import {
  FaChrome,
  FaFirefox,
  FaGithub,
  FaComments,
  FaEdit,
  FaArrowsAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                  meta                                      */
/* -------------------------------------------------------------------------- */
export const meta: Route.MetaFunction = () => [
  { title: "YouTube Live Chat Fullscreen | Official Site" },
  {
    name: "description",
    content:
      "YouTube Live をフルスクリーンのままチャットできる軽量 OSS ブラウザ拡張です。",
  },
];

/* -------------------------------------------------------------------------- */
/*                          animation presets (Variants)                      */
/* -------------------------------------------------------------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.85, filter: "blur(4px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.25 + i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                               custom cursor                                */
/* -------------------------------------------------------------------------- */
function GlowCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full pointer-events-none z-[10000] opacity-60 bg-fuchsia-500 blur-3xl"
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                        theme toggle (light / dark)                         */
/* -------------------------------------------------------------------------- */
function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-4 right-4 z-[10002] w-10 h-10 rounded-full bg-white/70 dark:bg-neutral-800/60 backdrop-blur-sm ring-1 ring-neutral-900/10 dark:ring-white/10 shadow-sm flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FaSun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FaMoon className="w-5 h-5 text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  page                                      */
/* -------------------------------------------------------------------------- */
export default function Index() {
  const features = [
    {
      icon: <FaComments />,
      title: "全画面でも投稿可能",
      desc: "コメントもスーパーチャットも、動画を途切れさせずに送信できます。",
    },
    {
      icon: <FaEdit />,
      title: "チャットのスタイル自由",
      desc: "背景・文字色・フォントサイズなどを編集可能。",
    },
    {
      icon: <FaArrowsAlt />,
      title: "ウィンドウ自在",
      desc: "好きなサイズと位置へドラッグ＆ドロップ。",
    },
  ];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      /* disable global animations if preferred */
    }
  }, []);

  return (
    <>
      <GlowCursor />
      <ThemeToggle />

      <main className="font-outfit bg-gray-50  text-[#141414] dark:bg-gray-950 dark:text-white selection:bg-cyan-500/40 dark:selection:bg-cyan-500/60">
        {/* -------------------------- HERO -------------------------- */}
        <motion.section
          className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1 className="text-center text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            YouTube Live Chat Fullscreen
          </motion.h1>
          <motion.p className="max-w-md text-center text-neutral-600 dark:text-neutral-300 mb-10">
            YouTube ライブを <b>フルスクリーン</b> のまま楽しみながらチャットを読んで書ける拡張機能
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            variants={fadeUp}
          >
            <CTAButton
              href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
              icon={<FaChrome />}
              label="Chrome"
              colour="from-violet-500 to-fuchsia-500"
            />
            <CTAButton
              href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
              icon={<FaFirefox />}
              label="Firefox"
              colour="from-orange-500 to-rose-500"
            />
            <CTAButton
              href="https://github.com/daichan132/Youtube-Live-Chat-Fullscreen"
              icon={<FaGithub />}
              label="GitHub"
              outline
            />
          </motion.div>
        </motion.section>

        {/* ----------------------- FEATURES ------------------------ */}
        <section id="features" className="pt-20 pb-28 px-4">
          <motion.h2
            className="text-center text-3xl sm:text-4xl font-semibold mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            主な機能
          </motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.article
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl border border-neutral-300/40 dark:border-white/10 bg-white/90 dark:bg-[#181818]/90 backdrop-blur p-8 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:scale-[1.03] transition-transform"
              >
                <div className="text-3xl text-violet-600 dark:text-violet-400 mb-2 flex-shrink-0">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-base text-[#141414]/90 dark:text-white/90">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {f.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ----------------------- SUPPORT ------------------------ */}
        <motion.section
          id="donate"
          className="pt-36 pb-60 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
            <h2 className="text-center text-3xl sm:text-4xl font-semibold">
              サポートする
            </h2>

            <p className="text-center max-w-2xl text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
              すべての機能を <b>無料 & オープンソース</b> で提供しています。<br />
              気に入っていただけたら、コーヒー 1 杯で応援してもらえると嬉しいです ☕
            </p>

            <a
              href="https://ko-fi.com/daichan132"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl hover:opacity-90 transition"
            >
              <img
                src="/daichan132-Sharable-Profile)-Horizontal.jpg"
                alt="Support daichan132 on Ko-fi"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               CTA button                                   */
/* -------------------------------------------------------------------------- */
function CTAButton({
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
