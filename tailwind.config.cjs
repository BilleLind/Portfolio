/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '420px',
			},
		},
	},
	plugins: [],
}

/* colors: {
	 golden: '#f4d35e',
	blue: '#0e141b', 
	dark: 'hsl(var(--dark) / <alpha-value>)',
	'dark-card': 'hsl(var(--dark-card) / <alpha-value>)',
	'dark-text': 'hsl(var(--dark-text) / <alpha-value>)',
	light: 'hsl(var(--light) / <alpha-value>)',
	 accent: '#46d179', 
},
fontSize: {
	'2xs': 'clamp(0.69rem, calc(0.65rem + 0.2vw), 0.84rem)',
	xs: 'clamp(0.83rem, calc(0.77rem + 0.29vw), 1.05rem)',
	base: 'clamp(1rem, calc(0.92rem + 0.42vw), 1.31rem)',
	lg: 'clamp(1.2rem, calc(1.08rem + 0.6vw), 1.64rem)',
	xl: 'clamp(1.44rem, calc(1.27rem + 0.83vw), 2.05rem)',
	'2xl': 'clamp(1.73rem, calc(1.5rem + 1.13vw), 2.56rem)',
	'3xl': 'clamp(2.07rem, calc(1.77rem + 1.53vw), 3.2rem)',
	'4xl': '',
}, */
