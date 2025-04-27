import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { FaChrome, FaFirefox, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// Define meta function separately
export const meta: Route.MetaFunction = () => {
  return [
    { title: "YouTube Live Chat Fullscreen | Official Site" },
    {
      name: "description",
      content:
        "YouTube Liveをフルスクリーンで楽しみながら、チャットの閲覧・投稿ができる拡張機能です。",
    },
  ];
};

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 px-8 w-full max-w-[87.5rem] mx-auto">
      <h1 className="font-outfit font-bold text-[3rem] leading-[1.2] text-center text-ink-900 w-full">YouTube Live Chat Fullscreen</h1>
      <p className="font-outfit text-[1rem] leading-[1.5] text-center text-ink-900/80 w-full max-w-2xl">
        YouTube Liveをフルスクリーンで楽しみながら、チャットの閲覧・投稿ができる拡張機能です。
      </p>
      <img
        src="/preview.png"
        alt="YouTube Live Chat Fullscreen Preview"
        className="rounded-sm shadow-sm w-full max-w-2xl border border-surface-1"
      />
      {/* Download Links Section */}
      <div className="w-full mt-8">
        <h2 className="font-outfit font-semibold text-[2.25rem] leading-[1.25] text-center mb-8 text-ink-900">拡張機能をインストール</h2>
        <div className="flex flex-col gap-8 max-w-lg mx-auto">
          <a
            href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Chrome拡張機能をインストール"
          >
            <div className="flex items-center gap-4 p-4 rounded-[4px] border border-surface-1 bg-surface-0 hover:shadow-sm hover:translate-y-0.5 active:scale-95 transition-transform duration-150 ease-out">
              <div className="h-12 w-12 rounded-[4px] flex items-center justify-center bg-surface-1">
                <FaChrome className="text-brand-600 text-xl" />s
              </div>
              <div className="flex-1">
                <h3 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">Google Chrome</h3>
              </div>
              <div className="flex items-center justify-center bg-brand-600 text-surface-0 rounded-[4px] px-4 py-2 min-h-[44px] min-w-[44px]">
                <span className="font-outfit font-medium">インストール</span>
                <FiArrowRight className="ml-2" />
              </div>
            </div>
          </a>

          <a
            href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Firefox拡張機能をインストール"
          >
            <div className="flex items-center gap-4 p-4 rounded-[4px] border border-surface-1 bg-surface-0 hover:shadow-sm hover:translate-y-0.5 active:scale-95 transition-transform duration-150 ease-out">
              <div className="h-12 w-12 rounded-[4px] flex items-center justify-center bg-surface-1">
                <FaFirefox className="text-brand-600 text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">Mozilla Firefox</h3>
              </div>
              <div className="flex items-center justify-center bg-brand-600 text-surface-0 rounded-[4px] px-4 py-2 min-h-[44px] min-w-[44px]">
                <span className="font-outfit font-medium">インストール</span>
                <FiArrowRight className="ml-2" />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* GitHub Link Section */}
      <div className="text-center mt-8 w-full">
        <a
          href="https://github.com/daichan132/Youtube-Live-Chat-Fullscreen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[1rem] leading-[1.5] text-ink-900/70 hover:text-ink-900 transition-colors duration-150 ease-out min-h-[44px] min-w-[44px]"
          aria-label="GitHubでソースコードを見る"
        >
          <FaGithub size={16} />
          <span className="font-outfit">GitHubでソースコードを見る</span>
        </a>
      </div>
    </main>
  );
}
