import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

// base "./" lets the site work from any GitHub Pages URL
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
})
