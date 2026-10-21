import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Resolves the public site URL used for canonical/Open Graph tags.
 * Priority: explicit VITE_SITE_URL, then Vercel's auto-injected production
 * domain, then localhost for local builds.
 *
 * The HTML uses the `__SITE_URL__` placeholder (not `%...%`, which Vite's HTML
 * parser tries to URI-decode and fails on).
 */
const resolveSiteUrl = () => {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:8080";
};

const injectSiteUrl = (siteUrl: string): Plugin => ({
  name: "inject-site-url",
  transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", siteUrl),
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), injectSiteUrl(resolveSiteUrl())],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
