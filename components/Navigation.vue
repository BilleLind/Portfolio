<script lang="ts" setup>
import { toggleDark } from '@/composables/dark'
</script>

<template>
	<header class="flex justify-between items-center py-6 px-4 max-w-90% md:max-w-75% mx-auto text-xl">
		<NuxtLink to="/">
			<div i-carbon-carbon text-green hover:opacity-75 title="Start page" />
		</NuxtLink>

		<nav>
			<ul flex items-center space-x-4 text-lg>
				<button @click="toggleDark()" title="Theme toggle"
					i-carbon-sun dark:i-carbon-moon hover:opacity-75 text-slate-800 dark:text-yellow></button>
				<li>
					<RouterLink to="https://blog.billelind.dev" class="btn flex items-center hover:text-green ">
						<div class="md:i-carbon-book text-purple-700 dark:text-purple-600 mr-1" />
						Blog
					</RouterLink>
				</li>
				<!-- <li>
					<RouterLink to="/about" class="btn flex items-center hover:text-teal-600"> About</RouterLink>
				</li>
				<li>
					<RouterLink to="/projects" class="btn flex items-center hover:text-teal-600"> Projects</RouterLink>
				</li> -->
			</ul>
		</nav>
	</header>
</template>


<style scoped>
</style>
