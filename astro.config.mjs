import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://studiopolastri.com.ar',
  vite: {
    plugins: [tailwindcss()],
  },
});
