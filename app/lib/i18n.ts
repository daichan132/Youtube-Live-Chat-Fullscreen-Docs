// 言語ディクショナリの型定義
export type Dictionary = {
  title: string;
  description: string;
  heroTitle: string;
  heroDesc: string;
  featuresTitle: string;
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
  supportTitle: string;
  supportDesc: string;
  supportImgAlt: string;
  chrome: string;
  firefox: string;
  github: string;
};

// 言語ディクショナリ
export const dict: Record<string, Dictionary> = {
  ja: {
    title: "YouTube Live Chat Fullscreen | Official Site",
    description: "YouTube Live をフルスクリーンのままチャットできる軽量 OSS ブラウザ拡張です。",
    heroTitle: "YouTube Live Chat Fullscreen",
    heroDesc: "YouTube ライブを <b>フルスクリーン</b> のまま楽しみながらチャットを読んで書ける拡張機能",
    featuresTitle: "主な機能",
    features: [
      {
        icon: "FaComments",
        title: "全画面でも投稿可能",
        desc: "全画面時でもチャットを閲覧・投稿できます",
      },
      {
        icon: "FaEdit",
        title: "チャットのスタイル自由",
        desc: "背景・文字色・フォントサイズなどを編集可能",
      },
      {
        icon: "FaArrowsAlt",
        title: "ウィンドウ自在",
        desc: "好きなサイズと位置へドラッグ＆ドロップ",
      },
    ],
    supportTitle: "サポートする",
    supportDesc:
      "すべての機能を <b>無料 & オープンソース</b> で提供しています。<br />気に入っていただけたら、コーヒー 1 杯で応援してもらえると嬉しいです ☕",
    supportImgAlt: "Support daichan132 on Ko-fi",
    chrome: "Chrome",
    firefox: "Firefox",
    github: "GitHub",
  },
  en: {
    title: "YouTube Live Chat Fullscreen | Official Site",
    description: "A lightweight OSS browser extension for chatting on YouTube Live while fullscreen.",
    heroTitle: "YouTube Live Chat Fullscreen",
    heroDesc: "A browser extension that lets you read and write chat while enjoying YouTube Live in <b>fullscreen</b> mode.",
    featuresTitle: "Main Features",
    features: [
      {
        icon: "FaComments",
        title: "Post in Fullscreen",
        desc: "View and post chat even in fullscreen mode.",
      },
      {
        icon: "FaEdit",
        title: "Customizable Chat Style",
        desc: "Edit background, text color, font size, and more.",
      },
      {
        icon: "FaArrowsAlt",
        title: "Flexible Window",
        desc: "Drag & drop to any size and position.",
      },
    ],
    supportTitle: "Support",
    supportDesc:
      "All features are provided <b>free & open source</b>.<br />If you like it, please support me with a cup of coffee ☕",
    supportImgAlt: "Support daichan132 on Ko-fi",
    chrome: "Chrome",
    firefox: "Firefox",
    github: "GitHub",
  },
};

// 言語判定関数
export function getLang(): string {
  if (typeof navigator !== "undefined") {
    const lang = navigator.language || navigator.languages?.[0] || "en";
    if (lang.startsWith("ja")) return "ja";
  }
  return "en";
}

// 現在の言語を取得
export function useTranslation() {
  const lang = getLang();
  const t = dict[lang];
  return { t, lang };
}