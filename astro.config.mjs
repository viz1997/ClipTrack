// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		routing: {
		  prefixDefaultLocale: true,
		},
	  },
	integrations: [tailwind(), mdx(), sitemap()],
});
