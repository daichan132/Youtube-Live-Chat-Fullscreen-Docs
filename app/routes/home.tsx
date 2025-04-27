import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { FaChrome, FaFirefox, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FiCode, FiPackage, FiTerminal } from "react-icons/fi";

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
                <FaChrome className="text-brand-600 text-xl" />
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

      {/* GitHub and Open Source Section */}
      <div className="w-full mt-16 max-w-2xl mx-auto">
        <h2 className="font-outfit font-semibold text-[2.25rem] leading-[1.25] text-center mb-8 text-ink-900">オープンソースプロジェクト</h2>

        <div className="flex flex-col gap-6 bg-surface-1 p-8 rounded-[4px]">
          <p className="font-outfit text-[1rem] leading-[1.5] text-ink-900 text-center">
            <strong>「YouTube Live Chat Fullscreen」はこれからも無料で、ソースコードも公開し続ける予定です。</strong>
          </p>

          <div className="flex items-center justify-center gap-4 my-4">
            <a
              href="https://github.com/daichan132/Youtube-Live-Chat-Fullscreen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface-0 border border-surface-1 px-4 py-2 rounded-[4px] text-[1rem] leading-[1.5] text-ink-900 hover:shadow-sm hover:translate-y-0.5 active:scale-95 transition-all duration-150 ease-out min-h-[44px]"
              aria-label="GitHubでソースコードを見る"
            >
              <FaGithub size={18} />
              <span className="font-outfit">GitHubリポジトリを見る</span>
            </a>
          </div>

          <h3 className="font-outfit font-semibold text-[1.5rem] leading-[1.3] text-ink-900 mt-4">ローカルで実行する</h3>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-surface-0 h-8 w-8 rounded-[4px] flex items-center justify-center border border-surface-1 flex-shrink-0">
                <FiPackage className="text-brand-600" />
              </div>
              <div>
                <h4 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">必要環境</h4>
                <p className="font-outfit text-[1rem] leading-[1.5] text-ink-900/80 mt-1">
                  Node.js (v22.x) と Yarn が必要です
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-surface-0 h-8 w-8 rounded-[4px] flex items-center justify-center border border-surface-1 flex-shrink-0">
                <FiCode className="text-brand-600" />
              </div>
              <div>
                <h4 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">インストール</h4>
                <div className="font-outfit text-[1rem] leading-[1.5] text-ink-900/80 mt-1">
                  <pre className="bg-ink-900 text-surface-0 p-3 rounded-[4px] overflow-x-auto text-sm mt-2">
                    <code>{`git clone https://github.com/daichan132/Youtube-Live-Chat-Fullscreen.git
cd Youtube-Live-Chat-Fullscreen
yarn install`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-surface-0 h-8 w-8 rounded-[4px] flex items-center justify-center border border-surface-1 flex-shrink-0">
                <FiTerminal className="text-brand-600" />
              </div>
              <div>
                <h4 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">コマンド</h4>
                <ul className="font-outfit text-[1rem] leading-[1.5] text-ink-900/80 mt-1 space-y-1 list-disc list-inside">
                  <li><code className="bg-surface-0 px-1 py-0.5 rounded-[2px] border border-surface-1">yarn dev</code>: 開発サーバーを起動</li>
                  <li><code className="bg-surface-0 px-1 py-0.5 rounded-[2px] border border-surface-1">yarn dev:firefox</code>: Firefox向け開発サーバーを起動</li>
                  <li><code className="bg-surface-0 px-1 py-0.5 rounded-[2px] border border-surface-1">yarn build</code>: プロジェクトをビルド</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
