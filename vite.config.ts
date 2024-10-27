import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { createApp } from "vinxi";
import { config } from "vinxi/plugins/config";

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
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
