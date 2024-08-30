import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: "/TGW-Hub",
  server: {
    host: true
  },
  integrations: [
    icon()
  ]
});
