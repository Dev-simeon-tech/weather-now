import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["weather-logo.png", "weather-192.png", "weather-512.png"],
      manifest: {
        name: "Weather now app",
        short_name: "Weather now",
        description:
          "Weather now - Accurate hourly and daily forecasts with real-time weather updates at your fingertips",
        display: "standalone",
        theme_color: "#02012C",
        background_color: "#02012C",
        lang: "en",
        start_url: "/",
        scope: "/",
        id: "https://weather-now-ose-app.vercel.app/",
        icons: [
          {
            src: "weather-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "weather-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        categories: ["weather", "utilities"],
        screenshots: [
          {
            src: "screenshots/Screenshot-desktop.png",
            type: "image/png",
            sizes: "1080x1920",
            label: "desktop view",
          },
          {
            src: "screenshots/Screenshot-tablet.png",
            type: "image/png",
            sizes: "1080x1920",
            label: "tablet view",
          },
          {
            src: "screenshots/Screenshot-mobile.png",
            type: "image/png",
            sizes: "1080x1920",
            label: "mobile view",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- this makes @ = src/
    },
  },
});
