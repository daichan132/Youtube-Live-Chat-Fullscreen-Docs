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
    <div className="fixed top-6 left-6 z-[10002] group">
      <Select value={currentLanguage.code} onValueChange={switchLanguage}>
        <SelectTrigger
          className="relative h-11 px-4 rounded-lg bg-card/80 backdrop-blur-md border border-border/40 shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-card/90 hover:shadow-lg hover:scale-[1.02] group"
          aria-label="Change language"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center gap-2">
            <SelectValue placeholder={currentLanguage.name} />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-popover/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl">
          {/* Map over the languages array to create SelectItems */}
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="text-popover-foreground hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary cursor-pointer transition-all duration-200 relative group"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                {lang.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}