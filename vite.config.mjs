import { defineConfig } from "vite";
import jahia from "@jahia/vite-plugin";
import { spawnSync } from "node:child_process";

export default defineConfig({
  plugins: [
    jahia({
      server: {
        input: "./src/server/**/*.tsx",
        output: {
          dir: "./dist/server",
          fileName: "index",
        },
      },
      watchCallback() {
        spawnSync("yarn", ["watch:callback"], { stdio: "inherit" });
      },
    }),
  ],
});
