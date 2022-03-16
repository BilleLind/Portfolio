<script>
    import SetTheme from './setTheme.svelte'
    import Menu from './icons/menu.svelte'
    let links = [
        {label: "Anders Bille Lind", url: "/", styling:"text-lg col-span-2"},
        {label: "Blog", url: "/blog", styling:"col-span-1 text-center"},
        {label: "Resume", url: "/resume", styling:"col-span-1 text-center"}
    ]
</script>

<nav class="flex items-center justify-between pt-8 landscape:max-w-[70%] landscape:mx-auto">
    <Menu links={links}/>
    <SetTheme/>
</nav>