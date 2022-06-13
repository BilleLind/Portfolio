import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		uno: true,
		icons: true,
		attributify: true,
	},
	css: ['@unocss/reset/tailwind.css'],
})
