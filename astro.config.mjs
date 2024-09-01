import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  base: "/TGW-Hub",
  server: {
    host: true
  },
  integrations: [
    icon(),
    image(),
  ]
});
