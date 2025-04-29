import { type Variants } from "framer-motion";

// 共通アニメーション設定
export const fadeUp: Variants = {
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