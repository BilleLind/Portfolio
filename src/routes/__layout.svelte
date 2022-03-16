<script>
	import '../app.css';
	import Nav from '../lib/nav.svelte';

	/* Theme */
	import { onMount } from 'svelte';
	import { theme } from '../stores/storage';
	onMount(() => {
		theme.useLocalStorage();
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			theme.set({ ...$theme, mode: 'light' });
		}
	});
</script>

<Nav />

<main class="">
	<slot />
</main>

<footer />
