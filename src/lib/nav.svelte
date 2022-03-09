<script>
    import SetTheme from './setTheme.svelte' 
</script>

<nav class="flex items-center justify-between max-w-5xl mx-auto mt-8">
    <div class="flex items-center gap-x-4">
        <a href="/" class="hover:underline text-lg">Anders Bille Lind</a>
        <a href="/blog" class="hover:underline ">Blog</a>
        <a href="/resume" class="hover:underline ">Resume</a>
    </div>
    <SetTheme/>
</nav>