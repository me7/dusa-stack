import { defineConfig } from 'astro/config';
import unocss from "unocss/astro";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  base: "gt",
  integrations: [solidJs(), unocss({
    injectReset: true,
  })]
});
