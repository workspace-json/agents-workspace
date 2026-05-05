// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://workspacejson.dev',
	integrations: [
		starlight({
			title: 'workspace.json',
			description: 'The open specification for AI agent workspace context files.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/workspacejson/spec' },
			],
			customCss: ['./src/styles/custom.css'],
			expressiveCode: { themes: ['github-light', 'github-dark'] },
			sidebar: [
				{ label: 'Spec', link: '/spec/' },
				{ label: 'Audit', link: '/audit/' },
				{ label: 'Examples', link: '/examples/' },
				{
					label: 'Spec Repo ↗',
					link: 'https://github.com/workspacejson/spec',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:site_name', content: 'workspace.json' },
				},
			],
		}),
		sitemap(),
	],
});
