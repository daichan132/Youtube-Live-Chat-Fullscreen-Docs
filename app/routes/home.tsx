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
    <main className="flex flex-col items-center gap-8 py-12 px-4 w-full max-w-screen-sm mx-auto">
      <h1 className="text-3xl font-bold text-center w-full">YouTube Live Chat Fullscreen</h1>
      <p className="text-center text-foreground/80 w-full">
        YouTube Liveをフルスクリーンで楽しみながら、チャットの閲覧・投稿ができる拡張機能です。
      </p>
      <img
        src="/preview.png"
        alt="YouTube Live Chat Fullscreen Preview"
        className="rounded-lg shadow-lg w-full border border-border"
      />
      {/* Download Links Section - Modern Large Button Layout */}
      <div className="w-full mt-8">
        <h3 className="text-2xl font-semibold text-center mb-6">拡張機能をインストール</h3>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          <a
            href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-[#4285F4]/20 bg-white dark:bg-zinc-900 hover:border-[#4285F4]/60 hover:shadow-md transition-all duration-200">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#4285F4]/10">
                <FaChrome className="text-[#4285F4] text-[28px]" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium group-hover:text-[#4285F4] transition-colors">Google Chrome</h4>
              </div>
              <div className="flex items-center justify-center bg-[#4285F4]/10 text-[#4285F4] group-hover:bg-[#4285F4] group-hover:text-white rounded-lg px-4 py-2 transition-colors duration-200">
                <span className="font-medium">インストール</span>
                <FiArrowRight className="ml-1" />
              </div>
            </div>
          </a>

          <a
            href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-[#FF9500]/20 bg-white dark:bg-zinc-900 hover:border-[#FF9500]/60 hover:shadow-md transition-all duration-200">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#FF9500]/10">
                <FaFirefox className="text-[#FF9500] text-[28px]" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium group-hover:text-[#FF9500] transition-colors">Mozilla Firefox</h4>
              </div>
              <div className="flex items-center justify-center bg-[#FF9500]/10 text-[#FF9500] group-hover:bg-[#FF9500] group-hover:text-white rounded-lg px-4 py-2 transition-colors duration-200">
                <span className="font-medium">インストール</span>
                <FiArrowRight className="ml-1" />
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
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub size={16} />
          <span>GitHubでソースコードを見る</span>
        </a>
      </div>
    </main>
  );
}
