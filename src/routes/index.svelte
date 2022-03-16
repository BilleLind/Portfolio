<svelte:head>
	<title>BilleLind's Portfolio</title>
</svelte:head>
<script>
	import Projects from '../lib/icons/projects.svelte';
	import Heart from '../lib/icons/heart.svelte';
	import Journal from '../lib/icons/journal.svelte';
	import Github from '../lib/icons/github.svelte';
	import Mail from '../lib/icons/mail.svelte';
	import Linkedin from '../lib/icons/linkedin.svelte';

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



<section class="pt-32">
	<h2 class="text-lg text-center">{greet} I'm <span class="accent font-bold">Bille!</span></h2>

	<div class="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 ">
		<a
			href="#projects"
			aria-label="Go to projects"
			class="p-3 rounded-xl flex gap-x-2 items-center text-accent bg-slate-900 dark:shadow-lg dark:shadow-black dark:hover:shadow-accent transition duration-500  "
		>
			<Projects styling=""/> Projects
		</a>
		<a
			href="#interests"
			aria-label="Go to interests"
			class="p-3 rounded-xl flex gap-x-2 items-center text-accent bg-slate-900 dark:shadow-lg dark:shadow-black dark:hover:shadow-accent transition duration-500 "
		>
			<Heart styling="text-red-600" /> Interest
		</a>
		<a
			href="#experience"
			aria-label="Go to experience"
			class="p-3 rounded-xl flex gap-x-2 items-center text-accent bg-slate-900 dark:shadow-lg dark:shadow-black dark:hover:shadow-accent transition duration-500 "
		>
			<Journal styling="text-purple-400" /> Experience
		</a>
	</div>
</section>

<section class="flex flex-col xl:flex-row gap-y-12 justify-around mt-20">
	<div class="flex-1 text-center">
		<h2 class="text-base md:text-lg font-medium whitespace-nowrap">I'm a Junior Full-Stack Developer,</h2>
		<h3 class="">Focused on creating efficient applications.</h3>
		<p />
	</div>
	<div class="flex-1 flex justify-center gap-x-8 items-center">
		<a href="https://github.com/BilleLind" aria-label="Github link"><Github styling="w-10 h-10 hover:text-accent" /></a>
		<a href="https://www.linkedin.com/in/anders-bille-lind-185074200/" aria-label="linkedin link"><Linkedin styling="w-10 h-10 hover:text-accent" /></a>
		<a href="mailto:anders.bille.lind@gmail.com" aria-label="Mailto link"><Mail styling="w-10 h-10 hover:text-accent" /></a>
	</div>
</section>
