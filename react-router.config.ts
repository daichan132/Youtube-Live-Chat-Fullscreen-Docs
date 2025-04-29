import type { Config } from "@react-router/dev/config";

export default {
  basename: import.meta.env.PROD ? '/Youtube-Live-Chat-Fullscreen-Docs/' : '/',
  ssr: false,
} satisfies Config;