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
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full pointer-events-none z-[10000] opacity-30 bg-primary blur-2xl"
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
    <div className="fixed top-6 right-6 z-[10002] group">
      <div className="absolute -inset-2 bg-gradient-to-l from-primary via-accent to-secondary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="relative w-12 h-12 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:scale-110 hover:rotate-12 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 cursor-pointer group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-secondary rounded-full opacity-60"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-80"></div>
        <LazyMotion features={domAnimation} strict>
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <m.div
                key="sun"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10"
              >
                <FaSun className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </m.div>
            ) : (
              <m.div
                key="moon"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10"
              >
                <FaMoon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </button>
    </div>
  );
}