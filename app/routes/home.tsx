import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { FaChrome, FaFirefox, FaGithub } from "react-icons/fa";
import { FiArrowRight, FiCode, FiPackage, FiTerminal } from "react-icons/fi";
import { useGithubRepo } from "~/hooks/useGithubRepo";

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
  const { data: repoData, isLoading, error } = useGithubRepo("daichan132", "Youtube-Live-Chat-Fullscreen");

  return (
    <main className="flex flex-col items-center gap-8 py-16 px-8 w-full max-w-[87.5rem] mx-auto">
      <h1 className="font-outfit font-bold text-[3rem] leading-[1.2] text-center text-ink-900 w-full">YouTube Live Chat Fullscreen</h1>
      <p className="font-outfit text-[1rem] leading-[1.5] text-center text-ink-900/80 w-full max-w-2xl">
        YouTube Liveをフルスクリーンで楽しみながら、チャットの閲覧・投稿ができる拡張機能です。
      </p>

      {/* Browser Install Buttons */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-lg mx-auto mb-2">
        <a
          href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[200px]"
          aria-label="Chrome拡張機能をインストール"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 rounded-[8px] border border-surface-2 shadow-sm px-4 flex justify-center items-center cursor-pointer"
          >
            <FaChrome className="mr-2 text-lg" />
            <span className="font-outfit font-medium">Chromeに追加</span>
          </Button>
        </a>

        <a
          href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[200px]"
          aria-label="Firefox拡張機能をインストール"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 rounded-[8px] border border-surface-2 shadow-sm px-4 flex justify-center items-center cursor-pointer"
          >
            <FaFirefox className="mr-2 text-lg" />
            <span className="font-outfit font-medium">Firefoxに追加</span>
          </Button>
        </a>
      </div>

      <img
        src="/preview.png"
        alt="YouTube Live Chat Fullscreen Preview"
        className="rounded-[8px] shadow-sm w-full max-w-2xl border border-surface-1"
      />

      {/* GitHub and Open Source Section */}
      <div className="w-full mt-16 max-w-2xl mx-auto">
        <h2 className="font-outfit font-semibold text-[2.25rem] leading-[1.25] text-center mb-8 text-ink-900">オープンソースプロジェクト</h2>

        <div className="bg-surface-1 rounded-[8px] p-8 flex flex-col gap-6">
          <p className="font-outfit text-[1rem] leading-[1.5] text-ink-900 text-center">
            <strong>「YouTube Live Chat Fullscreen」はこれからも無料で、ソースコードも公開し続ける予定です。</strong>
          </p>

          <div className="flex items-center justify-center gap-4 my-4">
            {isLoading && (
              <div className="p-4 text-gray-500 text-sm" aria-live="polite" role="status">Loading...</div>
            )}

            {error && (
              <div className="p-4 text-red-500 text-sm" aria-live="assertive" role="alert">
                Failed to load repository information
              </div>
            )}

            {repoData && (
              <a
                href={`https://github.com/${repoData.full_name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-4 border rounded-[8px] transition shadow-sm hover:shadow"
                aria-label={`GitHub repository: ${repoData.full_name}`}
              >
                <img src={repoData.owner.avatar_url} alt="" className="w-10 h-10 rounded-full" aria-hidden="true" />
                <div className="flex-grow">
                  <div className="font-semibold text-base">{repoData.full_name}</div>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-1">
                    <span>{repoData.stargazers_count} stars</span>
                    {repoData.language && <span>{repoData.language}</span>}
                    {repoData.updated_at && (
                      <span>Updated: {new Date(repoData.updated_at).toLocaleDateString()}</span>
                    )}
                  </div>

                </div>
              </a>
            )}
          </div>

          <h3 className="font-outfit font-semibold text-[1.5rem] leading-[1.3] text-ink-900 mt-4">ローカルで実行する</h3>

          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">必要環境</h4>
              <p className="font-outfit text-[1rem] leading-[1.5] text-ink-900/80 mt-1">
                Node.js (v22.x) と Yarn が必要です
              </p>
            </div>

            <div>
              <h4 className="font-outfit font-semibold text-[1rem] leading-[1.5] text-ink-900">インストール</h4>
              <div className="font-outfit text-[1rem] leading-[1.5] text-ink-900/80 mt-1">
                <pre className="bg-ink-900 text-surface-0 p-3 rounded-[8px] overflow-x-auto text-sm mt-2">
                  <code>{`git clone https://github.com/daichan132/Youtube-Live-Chat-Fullscreen.git
cd Youtube-Live-Chat-Fullscreen
yarn install`}</code>
                </pre>
              </div>
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

      {/* Donation Section */}
      <div className="w-full mt-16 max-w-2xl mx-auto">
        <h2 className="font-outfit font-semibold text-[2.25rem] leading-[1.25] text-center mb-8 text-ink-900">サポートする</h2>

        <div className="bg-surface-1 rounded-[8px] p-8 flex flex-col gap-6">
          <p className="font-outfit text-[1rem] leading-[1.5] text-ink-900 text-center">
            <strong>「YouTube Live Chat Fullscreen」の開発を支援していただけると嬉しいです。</strong>
          </p>

          <iframe
            id='kofiframe'
            src='https://ko-fi.com/daichan132/?hidefeed=true&widget=true&embed=true&preview=true'
            style={{ border: 'none', width: '100%' }}
            height='712'
            title='daichan132'
          ></iframe>
        </div>
      </div>
    </main>
  );
}
