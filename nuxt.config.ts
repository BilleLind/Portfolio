import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content'],
	unocss: {
		preflight: true
	},
	content: {
		highlight: {
			theme: 'vitesse-dark'
		}
	},
	css: ['@/assets/css/base.css'],
	typescript: { strict: true }
})
