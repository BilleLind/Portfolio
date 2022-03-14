<script>
	import { theme } from '../stores/storage.js';
	import Sun from './icons/sun.svelte';
	import Moon from './icons/moon.svelte';

	function setTheme() {
		if ($theme.mode === 'light') {
			$theme.mode = 'dark';
			documentUpdate($theme.mode, 'light');
			theme.set($theme);
		} else {
			$theme.mode = 'light';
			documentUpdate($theme.mode, 'dark');
			theme.set($theme);
		}
	}
	function documentUpdate(mode, previous) {
		document.body.dataset.theme = $theme.mode;
		if (previous === 'dark') {
			document.documentElement.classList.remove(previous);
		}
		if (mode === 'dark') {
			document.documentElement.classList.add(mode);
		}
	}
</script>

<button on:click={setTheme} aria-label={$theme.mode} class="p-1 rounded-xl border-2 border-primary-dark-800 dark:border-white hover:border-accent dark:hover:border-accent hover:text-accent">
	{#if $theme.mode == 'dark'}
		<Sun />
	{:else if $theme.mode == 'light'}
		<Moon />
	{/if}
</button>
