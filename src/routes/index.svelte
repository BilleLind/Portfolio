<script>
	import Projects from '../lib/icons/projects.svelte';
	import Heart from '../lib/icons/heart.svelte';
	import Journal from '../lib/icons/journal.svelte';

	let currentTime = new Date().getHours();
	let greet;
	if (currentTime <= 6) {
		greet = 'Hello Night Owl!, ';
	} else if (currentTime > 6 && currentTime < 12) {
		greet = 'Good Morning, ';
	} else if (currentTime >= 12 && currentTime < 18) {
		greet = 'Good Afternoon, ';
	} else if (currentTime >= 18 && currentTime < 24) {
		greet = 'Good Evening, ';
	}
</script>

<section class="max-w-5xl mx-auto pt-32 text-center">
	<h2 class="text-lg">{greet} I'm <span class="accent font-bold">Bille!</span></h2>

	<div class="mt-10 flex justify-center gap-x-6">
		<a
			href="#projects"
			class="p-2 rounded-xl flex gap-x-2 items-center text-accent bg-slate-900 shadow-md shadow-black hover:shadow-accent transition duration-500 "
		>
			<Projects /> Projects
		</a>
		<a
			href="#interest"
			class="p-2 rounded-xl flex gap-x-2 items-center text-accent bg-slate-900 shadow-md shadow-black hover:shadow-accent transition duration-500"
		>
			<Heart styling="text-red-600" /> Interest
		</a>
		<a
			href="#experience"
			class="p-2 rounded-xl flex gap-x-2 items-center text-accent bg-slate-900 shadow-md shadow-black hover:shadow-accent transition duration-500"
		>
			<Journal styling="text-purple-400" /> Experience
		</a>
	</div>
</section>

<section class="">
</section>
