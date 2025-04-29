import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import type { InitOptions } from 'i18next';
import languageCodes from '../../public/language_codes.json'; // Import language codes

// 型定義
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

// i18next初期化オプション
const i18nOptions: InitOptions = {
  // 言語検出に失敗した場合のフォールバック言語
  fallbackLng: 'en',
  // サポートする言語 - Dynamically get keys from imported JSON
  supportedLngs: Object.keys(languageCodes),
  // キーが見つからない場合はキー名をそのまま表示
  keySeparator: false,
  interpolation: {
    // Reactではデフォルトでエスケープされるので不要
    escapeValue: false,
  },
  // JSON読み込みの設定
  backend: {
    loadPath: '/locales/{{lng}}.json',
  },
  // 言語検出の設定
  detection: {
    // 検出順序: クッキー、ブラウザ設定、HTML言語属性
    order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
    // キャッシュ方法
    caches: ['localStorage'],
  },
  // デバッグモード（開発時のみ有効にすると便利）
  debug: process.env.NODE_ENV === 'development',
};

// i18nextの初期化
i18n
  // HTTPバックエンドの追加
  .use(Backend)
  // ブラウザの言語を自動検出
  .use(LanguageDetector)
  // react-i18nextの初期化
  .use(initReactI18next)
  // i18nの設定
  .init(i18nOptions);

// 言語切り替え用ヘルパー関数
export const changeLanguage = (lng: string) => {
  return i18n.changeLanguage(lng);
};

export default i18n;