import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import { imagetools } from "vite-imagetools";

// https://astro.build/config
export default defineConfig({
  base: "/TGW-Hub",
  server: {
    host: true
  },
  integrations: [
    icon(),
  ],
  vite: {
    plugins: [
      imagetools({
        defaultDirectives: (url) => {
          if(url.searchParams.has("member_pfp")) {
            return new URLSearchParams({
              format: "avif;webp;jpeg",
              as: "metadata"
            })
          }
          return new URLSearchParams()
        }
      }),
    ]
  }
});
