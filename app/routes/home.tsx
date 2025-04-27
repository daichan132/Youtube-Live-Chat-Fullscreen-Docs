import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { FaChrome, FaFirefox, FaGithub } from "react-icons/fa";
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
  const { data: repoData } = useGithubRepo("daichan132", "Youtube-Live-Chat-Fullscreen");

  return (
    <main className="flex flex-col items-center gap-6 sm:gap-8 py-8 sm:py-16 px-8 w-full max-w-[87.5rem] mx-auto">
      {/* hero title & description */}
      <h1 className="font-outfit font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.2] text-center text-ink-900 w-full">YouTube Live Chat Fullscreen</h1>
      <p className="font-outfit text-[0.9rem] sm:text-[1rem] text-center text-ink-900/80 w-full max-w-2xl px-2">
        YouTubeライブを全画面のままにしながらチャットパネルを表示することができます
      </p>

      {/* Browser Install Buttons */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        <div className="flex justify-center items-center gap-4 w-full">
          <a
            href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-full sm:min-w-[200px]"
            aria-label="Chrome拡張機能をインストール"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-fit h-12 rounded-[6px] border border-surface-2 shadow-sm px-8 flex justify-center items-center cursor-pointer"
            >
              <FaChrome className="mr-2 text-lg" />
              <span className="font-outfit font-medium">Chromeに追加</span>
            </Button>
          </a>

          <a
            href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-full sm:min-w-[200px]"
            aria-label="Firefox拡張機能をインストール"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-fit h-12 rounded-[6px] border border-surface-2 shadow-sm px-8 flex justify-center items-center cursor-pointer"
            >
              <FaFirefox className="mr-2 text-lg" />
              <span className="font-outfit font-medium">Firefoxに追加</span>
            </Button>
          </a>
        </div>
      </div>

      <img
        src="/preview.png"
        alt="YouTube Live Chat Fullscreen Preview"
        className="rounded-[6px] shadow-sm w-full max-w-2xl border border-surface-1 mt-2"
      />

      {/* Donation Section */}
      <div className="w-full mt-6 sm:mt-10 max-w-2xl mx-auto px-2 sm:px-0">
        <h2 className="font-outfit font-semibold text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] leading-[1.25] text-center mb-3 sm:mb-5 text-ink-900">サポートする</h2>
        <div className="bg-surface-1 rounded-[6px] p-4 sm:p-8 flex flex-col gap-4 sm:gap-6">
          <p className="font-outfit text-[0.9rem] sm:text-[1rem] text-ink-900 text-center">
            「YouTube Live Chat Fullscreen」はこれからも全ての機能を無料で提供し、ソースコードも公開し続ける予定です💪もしこのプロジェクトを気に入って頂けたらコーヒーを一杯ご馳走してもらえると嬉しいです!励みになります☺️
          </p>
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/daichan132/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{ border: "none", width: "100%", marginTop: "1rem" }}
            height="650"
            title="daichan132"
          />
          {repoData && (
            <a
              href={`https://github.com/${repoData.full_name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border rounded-[6px] transition shadow-sm hover:shadow"
              aria-label={`GitHub repository: ${repoData.full_name}`}
            >
              <img src={repoData.owner.avatar_url} alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" aria-hidden="true" />
              <div className="flex-grow">
                <div className="font-semibold text-sm sm:text-base">{repoData.full_name}</div>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-gray-500 mt-1">
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

      </div>
    </main>
  );
}
