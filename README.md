# Youtube Live Chat Fullscreen - Documentation Website

This is the official documentation and landing page for the **Youtube Live Chat Fullscreen** browser extension.

## About the Extension

Youtube Live Chat Fullscreen enhances your YouTube Live viewing experience by allowing you to display the live chat in fullscreen mode alongside the video stream.

**Get the Extension:**

*   [<img src="https://img.shields.io/chrome-web-store/v/dlnjcbkmomenmieechnmgglgcljhoepd?logo=google-chrome&label=Chrome%20Web%20Store&color=blue" alt="Chrome Web Store">](https://chromewebstore.google.com/detail/youtube-live-chat-fullscr/dlnjcbkmomenmieechnmgglgcljhoepd)
*   [<img src="https://img.shields.io/amo/v/youtube-live-chat-fullscreen?logo=firefox&label=Firefox%20Add-ons&color=orange" alt="Firefox Add-ons">](https://addons.mozilla.org/firefox/addon/youtube-live-chat-fullscreen/)
*   [<img src="https://img.shields.io/github/stars/daichan132/Youtube-Live-Chat-Fullscreen?style=social" alt="GitHub stars">](https://github.com/daichan132/Youtube-Live-Chat-Fullscreen) - Extension Repository

## About This Website

This website provides information about the extension's features and links to install it. It is built using modern web technologies.

**Features:**

*   Built with [React](https://react.dev/) and [React Router](https://reactrouter.com/)
*   Written in [TypeScript](https://www.typescriptlang.org/)
*   Styled with [Tailwind CSS](https://tailwindcss.com/)
*   Internationalization (i18n) support using [i18next](https://www.i18next.com/)
*   Development server powered by [Vite](https://vitejs.dev/)
*   Deployment via [GitHub Actions](https://github.com/features/actions) to [GitHub Pages](https://pages.github.com/)

## Getting Started (Development)

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 22 or later recommended)
*   [Yarn](https://yarnpkg.com/) (Classic or Berry)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/daichan132/Youtube-Live-Chat-Fullscreen-Docs.git
cd Youtube-Live-Chat-Fullscreen-Docs
yarn install
```

### Development Server

Start the development server with Hot Module Replacement (HMR):

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

## Building for Production

Create a production-ready build:

```bash
yarn build
```

This command bundles the application and outputs the static files to the `build/client` directory.

## Deployment

This project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

---

Built with ❤️ using React Router and Vite.
