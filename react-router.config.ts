import type { Config } from "@react-router/dev/config";

export default {
  basename: import.meta.env.PROD ? '/<repo>/' : '/',
  ssr: false,
} satisfies Config;