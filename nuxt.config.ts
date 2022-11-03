// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Portfolio of BilleLind',
			meta: [
				{ name: 'description', content: "Portfolio displaying Anders Bille Lind's projects, experiences and much more." },
				{ name: 'author', content: 'Anders Bille Lind' },
				{ name: 'color-scheme', content: 'dark light' },
			],
			link: [{ rel: 'icon', href: '/favicon.svg' }],
		},
	},
	modules: ['@unocss/nuxt', '@vueuse/nuxt'],
	css: ['@/assets/base.css'],
	typescript: { shim: false, strict: true },
	unocss: {
		icons: { scale: 1.2 },
		attributify: true,
		shortcuts: [
			{'nav-btn': 'p-2 border-2 rounded-lg inline-flex border-dark dark:border-light hover:border-accent transition ease-in-out w-full text-ellipsis'},
			{'section': 'max-w-11/12 lg:max-w-9/12  mx-auto'},
			{'heading': 'text-lg sm:text-xl md:text-2xl lg:text-3xl'},
			{'para': 'sm:text-lg md:text-xl lg:text-2xl'}
		],
		theme: {
			colors: {
				golden: '#f4d35e',
				blue: '#0e141b',
				vio: 'violet-500',
				dark: '#001b29',
				light: '#E0E0E0',
				accent: '#46d179',
			},
			breakpoints:{
				'xs': '360px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px'
			}
		},
		
	},
})
