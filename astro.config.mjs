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
            });
          }
          return new URLSearchParams();
        }
      }),
    ],
    resolve: {
      alias: {
        '@sass-lib': '/src/lib/sass',
        '@util-lib': '/src/lib/module'
      },
    },
    build: {
      rollupOptions: {
        output:  {
          assetFileNames: (assetFile) => {
            const randomID = Math.random().toString(16).split(".").pop();
            const prefix = "tgw-img-" + randomID;
            const imageFiles = /^.*\.(jpg|jpeg|webp|avif|png|gif)$/
            if(assetFile.name.match(imageFiles)) {
              return `_assets/${prefix}[hash][extname]`;
            }
            return `_assets/[name]-[hash][extname]`;
          }
        }
      }
    }
  },
});
