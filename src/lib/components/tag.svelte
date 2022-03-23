<script>
	export let styling, link;
</script>

<a href={link} rel="norefferor" target="_blank"
	class="bg-primary-dark-700 text-xs flex items-center justify-center py-1 px-2 rounded-xl w-fit whitespace-nowrap {styling}"
>
	<slot />
</a>
