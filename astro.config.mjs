// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidschischke.github.io',
  base: '/JuliasWebsite',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});