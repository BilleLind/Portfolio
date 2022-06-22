<template>
	<header class="flex justify-between items-center py-6 px-4 max-w-75% mx-auto"  >
		<RouterLink to="/" >
			<div i-carbon-carbon text-xl text-green hover:opacity-75 title="Start page"/>
		</RouterLink>

		<nav>
			<ul flex items-center space-x-4 text-lg>
				<button @click="toggleDark()" title="Theme toggle" i="carbon-sun dark:carbon-moon" hover:opacity-75 text="slate-800 dark:yellow "></button>
				<li>
					<RouterLink to="/blog" class="btn flex items-center hover:text-teal-600"
						><div i="md:carbon-book" text="purple-900 dark:violet-800" mr-1 />
						Blog</RouterLink
					>
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

<script setup lang="ts">
import { toggleDark } from '@/composables/dark'
</script>

<style scoped></style>
