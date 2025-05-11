import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, useMotionValue, useSpring } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

export function GlowCursor() {
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
      <m.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full pointer-events-none z-[10000] opacity-60 bg-fuchsia-500 blur-3xl"
      />
    </>
  );
}

export function ThemeToggle() {
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
      className="fixed top-4 right-4 z-[10002] w-10 h-10 rounded-full bg-white/70 dark:bg-neutral-800/60 backdrop-blur-sm ring-1 ring-neutral-900/10 dark:ring-white/10 shadow-sm flex items-center justify-center hover:scale-105 focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 transition duration-150 cursor-pointer"
    >
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <m.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FaSun className="w-5 h-5 text-yellow-400" />
            </m.div>
          ) : (
            <m.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FaMoon className="w-5 h-5 text-yellow-500" />
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </button>
  );
}