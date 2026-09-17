import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 唯一来源：SITE_URL 环境变量；未设置时回落到生产域名，保证 canonical / OG / JSON-LD / sitemap 始终是绝对地址。
const SITE_URL = process.env.SITE_URL?.trim() || 'https://pykaralake.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
