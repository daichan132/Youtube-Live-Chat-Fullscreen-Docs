import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "@fontsource/outfit";
import "./lib/i18n";
import { LoadingSpinner } from "./components/ui/loading-spinner"; // Import LoadingSpinner

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="mRcYAdfLj4mcbjffnFSUVW5_Zk9Nh5zjI0LTcj9SPT0" />
        <link rel="icon" href={`${import.meta.env.BASE_URL}favicon.ico`} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <footer className="text-center text-sm text-neutral-500 py-4">
          © 2025 daichan132
        </footer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// Add HydrateFallback for SPA mode
export function HydrateFallback() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoadingSpinner size={48} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
