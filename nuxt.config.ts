import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@unocss/nuxt'],
	Unocss: {
		uno: true,
		icons: true,
		attributify: true,
		typography: true,
		preflight: true,
		shortcuts: [],
	},
    css: ['@/assets/css/base.css'],
    typescript: {strict: true}
})
