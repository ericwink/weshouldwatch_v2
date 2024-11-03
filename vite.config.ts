import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { createApp } from "vinxi";
import { config } from "vinxi/plugins/config";
import { fileURLToPath } from "url";
import { input } from "vinxi/plugins/config";

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "server",
      base: "/trpc",
      type: "http",
      handler: fileURLToPath(new URL("./handler.js", import.meta.url)),
      target: "server",
      plugins: () => [
        input(
          "$vinxi/trpc/router",
          fileURLToPath(new URL("./app/server.ts", import.meta.url))
        ),
      ],
    },
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      base: "/",
      plugins: () => [
        tsconfigPaths(),
        config("vite", {
          // additional vite options
          plugins: [react()],
        }),
        // additional vite plugins
      ],
    },
  ],
});
