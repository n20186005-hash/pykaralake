import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
