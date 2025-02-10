import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ใช้ "/" สำหรับ root path หรือแก้ไขตาม domain ของคุณ
  build: {
    outDir: "dist",
  },
});
