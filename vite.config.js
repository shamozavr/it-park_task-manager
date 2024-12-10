import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api/tasks": {
        target: "http://localhost:3001/tasks",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/tasks/, ""),
      },
      "/api/users": {
        target: "http://localhost:3001/users",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/users/, ""),
      },
    },
  },
});