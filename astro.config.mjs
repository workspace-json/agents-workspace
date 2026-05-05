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
			expressiveCode: {
				themes: ['one-dark-pro', 'github-light'],
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'What is workspace.json?', link: '/' },
						{ label: 'FAQ', link: '/faq/' },
					],
				},
				{
					label: 'Specification',
					items: [
						{ label: 'v0.1 Spec', link: '/spec/' },
						{ label: 'Examples', link: '/examples/' },
						{ label: 'Implementations', link: '/implementations/' },
						{ label: 'Governance', link: '/governance/' },
						{ label: 'Changelog', link: '/changelog/' },
					],
				},
				{
					label: 'Audit Tool',
					items: [
						{ label: 'Overview', link: '/audit/' },
					],
				},
				{
					label: 'Resources',
					items: [
						{
							label: 'GitHub ↗',
							link: 'https://github.com/workspacejson/spec',
							attrs: { target: '_blank', rel: 'noopener noreferrer' },
						},
						{
							label: 'npm: @workspacejson/spec ↗',
							link: 'https://www.npmjs.com/package/@workspacejson/spec',
							attrs: { target: '_blank', rel: 'noopener noreferrer' },
						},
					],
				},
			],
			components: {
				Footer: './src/components/overrides/Footer.astro',
				Head: './src/components/overrides/Head.astro',
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