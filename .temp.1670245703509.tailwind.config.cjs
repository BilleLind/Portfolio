/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				golden: '#f4d35e',
				blue: '#0e141b',
				dark: hsl(0, 0, 8) /* '#151515' */,
				'dark-card': hsl(0, 0, 15) /* '#262626' */,
				'dark-text': '#FDFDFD',
				light: '#E0E0E0',
				accent: '#46d179',
			},
			screens: {
				xs: '420px',
			},
		},
	},
	plugins: [],
}
