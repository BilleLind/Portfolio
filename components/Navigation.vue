<template>
	<header flex w-full mx-auto px-6 justify-between items-center py-6>
		<a href="/" i-carbon-bee></a>
		<nav flex items-center>
			<ul flex space-x-4 md:space-x-6 justify-end border border-red>
				<li><NuxtLink to="/blog">Blog</NuxtLink></li>
				<li><NuxtLink to="/about">about</NuxtLink></li>
			</ul>
            <!-- If mobile => ul hidden and flex-col/row, svg menu =>click  ul flex-->
		</nav>
	</header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
