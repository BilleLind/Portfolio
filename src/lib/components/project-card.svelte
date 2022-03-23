<script>
	import Github from '../icons/github.svelte';
	import Link from '../icons/link.svelte';
	export let image, title, desc, gLink, link;
</script>

<div class=" bg-card border-2 border-card rounded-xl shadow-xl shadow-black w-full min-w-min ">
	<img src={image.src} alt={image.alt} class="rounded-xl w-full aspect-video" />
	<div class="p-2 divide-y-2 divide-primary-dark-300 divide-dashed">
		<div class="flex justify-between">
			<h4 class="text-base">{title}</h4>
			<div class="flex">
				{#if gLink}
					<a href={gLink} rel="norefferor" target="_blank"><Github styling="hover:bg-primary-dark-600 rounded-xl p-1 w-8 h-8" /></a>
				{/if}
				{#if link}
					<a href={link} rel="norefferor" target="_blank"><Link styling="hover:bg-primary-dark-600 rounded-xl p-1 w-8 h-8" /></a>
				{/if}
			</div>
		</div>
		<p class="pt-2">
			{desc}
		</p>
		
	</div>
    <div class="flex justify-end items-center flex-wrap gap-2 mt-1 ">
			<slot/>
            
		</div>
</div>
