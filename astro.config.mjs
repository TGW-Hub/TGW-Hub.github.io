import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import preact from "@astrojs/preact";
import { imagetools } from "vite-imagetools";
import dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  base: process.env.ROOT_NAME || '/',
  server: {
    host: true
  },
  integrations: [
    icon(),
    preact(),
  ],
  vite: {
    plugins: [
      imagetools({
        defaultDirectives: (url) => {
          if(url.searchParams.has("fb")) {
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
        '@util-lib': '/src/lib/module',
        '@img': '/src/images',
      },
    },
    build: {
      rollupOptions: {
        output:  {
          assetFileNames: (assetFile) => {
            const randomID = Math.random().toString(16).split(".").pop();
            const prefix = "tgw-img-" + randomID;
            const imageFiles = /^.*\.(jpg|jpeg|webp|avif|png|gif)$/
            const fontFiles = /^.*\.(woff|woff2|ttf)$/
            if(assetFile.name.match(imageFiles)) {
              return `_assets/images/${prefix}[hash][extname]`;
            } else if(assetFile.name.match(fontFiles)) {
              return `_assets/fonts/[name]-[hash][extname]`;
            }
            return `_assets/[name]-[hash][extname]`;
          }
        }
      }
    }
  },
});
