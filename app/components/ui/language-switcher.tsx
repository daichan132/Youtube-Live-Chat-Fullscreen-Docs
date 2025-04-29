import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"; // Import shadcn/ui Select components
import languageCodes from "../../lib/language_codes.json"; // Import language codes

// Define language configuration by mapping over the imported JSON
const languages = Object.entries(languageCodes).map(([code, name]) => ({ code, name }));


export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Find the current language object based on i18n.language
  // Fallback to English if the current language isn't in our list
  const currentLanguage = languages.find(lang => i18n.language?.startsWith(lang.code)) || languages[0];

  const switchLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="fixed top-6 left-6 z-[10002]">
      <Select value={currentLanguage.code} onValueChange={switchLanguage}>
        <SelectTrigger
          className="h-10 px-3 rounded-lg bg-white/70 dark:bg-neutral-800/60 backdrop-blur-sm ring-1 ring-neutral-900/10 dark:ring-white/10 shadow-sm flex items-center justify-center transition-transform cursor-pointer border-0 focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
          aria-label="Change language"
        >
          {/* Display the name of the current language */}
          <SelectValue placeholder={currentLanguage.name} />
        </SelectTrigger>
        <SelectContent className="bg-[var(--popover)] border-[var(--border)] rounded-lg">
          {/* Map over the languages array to create SelectItems */}
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="text-[var(--popover-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] focus:bg-[var(--accent)] focus:text-[var(--accent-foreground)] cursor-pointer"
            >
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}