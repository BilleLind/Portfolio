<script>
	export var link;
    import Icon from '../icons/github.svelte'
</script>

<div class="bg-primary-dark-700 rounded-xl shadow-lg p-4 w-full">
	<a class="" href={link} rel="noreferrer" target="_blank">
		<Icon/>
		<slot />
	</a>
</div>
