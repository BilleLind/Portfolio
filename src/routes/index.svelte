<script>
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

<section class="h-screen max-w-5xl mx-auto mt-32 text-center">
	<h2 class="text-base">{greet} I'm Bille!</h2>
    
</section>
