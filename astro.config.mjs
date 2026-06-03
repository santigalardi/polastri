import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dominio en producción. Si cambia, actualizar también `dominio` en
  // src/data/site.ts. De esta URL derivan canonical, OG, sitemap y robots.txt.
  site: 'https://estudiopolastri.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
