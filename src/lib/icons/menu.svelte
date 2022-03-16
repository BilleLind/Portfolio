<script>
	export let links = [];
</script>

<div class="grid grid-cols-2 xl:grid-cols-4 items-center gap-y-2 gap-x-8">
	{#each links as link}
		<a href={link.url} class="{link.styling} hover:underline hover:text-accent">{link.label}</a>
	{/each}
</div>
