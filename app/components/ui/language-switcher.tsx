import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = i18n.language?.startsWith('ja') ? 'ja' : 'en';
  const toggleOpen = () => setIsOpen(!isOpen);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 left-4 z-[10002]">
      <button
        onClick={toggleOpen}
        aria-label="Change language"
        className="w-10 h-10 rounded-full bg-white/70 dark:bg-neutral-800/60 backdrop-blur-sm ring-1 ring-neutral-900/10 dark:ring-white/10 shadow-sm flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
      >
        <span className="font-medium text-sm">
          {currentLang === 'ja' ? '日本語' : 'EN'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute top-12 left-0 bg-white dark:bg-neutral-800 rounded-md shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-1 flex flex-col min-w-28"
          >
            <button
              onClick={() => switchLanguage('en')}
              className={`px-3 py-2 text-left rounded ${currentLang === 'en'
                  ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300'
                  : 'hover:bg-gray-100 dark:hover:bg-neutral-700'
                }`}
            >
              English
            </button>
            <button
              onClick={() => switchLanguage('ja')}
              className={`px-3 py-2 text-left rounded ${currentLang === 'ja'
                  ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300'
                  : 'hover:bg-gray-100 dark:hover:bg-neutral-700'
                }`}
            >
              日本語
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}