<script>
	import Github from '../lib/icons/github.svelte';
	import Mail from '../lib/icons/mail.svelte';
	import Linkedin from '../lib/icons/linkedin.svelte';
	import PCard from '../lib/components/project-card.svelte';
	import Tag from '../lib/components/tag.svelte';

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

<svelte:head>
	<title>BilleLind's Portfolio</title>
</svelte:head>

<section class="pt-32">
	<h2 class="text-lg text-center">{greet} I'm <span class="accent font-bold">Bille!</span></h2>

	<div class="flex flex-col xl:flex-row gap-y-12 justify-around mt-20">
		<div class="flex-1 text-center">
			<h2 class="text-base md:text-lg font-medium whitespace-nowrap">
				I'm a Junior Full-Stack Developer,
			</h2>
			<h3 class="">Focused on creating efficient applications.</h3>
			<p />
		</div>
		<div class="flex-1 flex justify-center gap-x-8 items-center">
			<a href="https://github.com/BilleLind" aria-label="Github link"
				><Github styling="w-10 h-10" /></a
			>
			<a href="https://www.linkedin.com/in/anders-bille-lind-185074200/" aria-label="linkedin link"
				><Linkedin styling="w-10 h-10 " /></a
			>
			<a href="mailto:anders.bille.lind@gmail.com" aria-label="Mailto link"
				><Mail styling="w-10 h-10 hover:text-accent" /></a
			>
		</div>
	</div>
</section>

<!-- Projects -->
<section class="mt-32">
	<h3 class="text-lg mb-4">Projects</h3>

	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center w-full">
		<PCard
			image={{ src: '/static/images/redeemTech.jpg', alt: 'Image of Redeem Tech' }}
			title="Redeem Tech"
			desc="Created Redeem Tech's new Web application, including a custom Admin Panel with the ability to change various content."
		>
			<Tag link="https://laravel.com" styling="text-purple-400">Laravel</Tag>
			<Tag link="https://alpinejs.dev/" styling="text-accent">Alpine.js</Tag>
			<Tag link="https://www.postgresql.org/" styling="text-accent">PostgreSQL</Tag>
		</PCard>
		<PCard
			image={{ src: '/static/images/connect.jpg', alt: 'Image of Zealand Connect' }}
			title="Zealand Connect"
			desc="A collaborative effort of the CS team developed with the school as the customer and in 4 scrum teams."
			gLink="https://github.com/EWCMF/zealand_connect"
			link="https://connect.zealand.dk/"
		>
			<Tag link="https://expressjs.com/" styling="text-purple-400">Express</Tag>
			<Tag link="https://handlebarsjs.com/" styling="text-accent">Handlebars</Tag>
		</PCard>
	</div>
</section>

<!-- Tools/languages/interests -->
<section class="grid grid-cols-2 md:grid-cols-4" />
