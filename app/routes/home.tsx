import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

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
    <main className="flex flex-col items-center gap-8 py-12 px-4">
      <h1 className="text-3xl font-bold text-center">
        YouTube Live Chat Fullscreen
      </h1>
      <p className="text-lg text-center max-w-xl text-foreground/80">
        YouTube Liveをフルスクリーンで楽しみながら、チャットの閲覧・投稿ができる拡張機能です。
      </p>
      <img
        src="/preview.png" // Assuming preview.png is in the public folder
        alt="YouTube Live Chat Fullscreen Preview"
        className="rounded-lg shadow-lg max-w-lg w-full border border-border"
      />
      {/* Add Download Links */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button>
          <a
            href="https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chromeに追加
          </a>
        </Button>
        <Button variant="secondary"> {/* Use secondary variant for Firefox */}
          <a
            href="https://addons.mozilla.org/ja/firefox/addon/youtube-live-chat-fullscreen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firefoxに追加
          </a>
        </Button>
      </div>
      {/* Update GitHub Link Section */}
      <div className="text-center mt-4 max-w-xl">
        <Button asChild variant="outline">
          <a
            href="https://github.com/daichan132/Youtube-Live-Chat-Fullscreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHubでソースを見る
          </a>
        </Button>
        <p className="text-sm text-foreground/70 mt-2">
          このプロジェクト「YouTube Live Chat Fullscreen」はこれからも無料で、ソースコードも公開し続ける予定です。
        </p>
      </div>
      {/* Update Support Section */}
      <div className="w-full max-w-md mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Support the Project</h2>
        <p className="text-center mb-4 text-foreground/80">
          もし気に入って頂けたら、コーヒーを一杯ご馳走してもらえると開発の励みになります！☺️
        </p>
        <iframe
          id="kofiframe"
          src="https://ko-fi.com/daichan132/?hidefeed=true&widget=true&embed=true&preview=true"
          style={{
            width: "100%",
            background: "#f9f9f9", // Consider adjusting background for dark mode or removing it
            borderRadius: 'var(--radius)', // Match shadcn border radius
          }}
          height={712}
          title="daichan132 Ko-fi Panel" // Updated title
        />
      </div>
    </main>
  );
}
