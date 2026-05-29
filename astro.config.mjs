import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dominio en producción. Al migrar al dominio propio, actualizar también
  // `dominio` en src/data/site.ts. De esta URL derivan canonical, OG, sitemap
  // y robots.txt.
  site: 'https://polastri.pages.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
