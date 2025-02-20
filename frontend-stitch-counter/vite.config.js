import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    //jsdom simulates a dom environment as if you were in the browser
    environment: "jsdom",

    globals: true,
    setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
  },
});
