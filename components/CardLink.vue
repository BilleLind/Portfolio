<script setup>
defineProps({
  header: String,
  description: String,
})
</script>
<template>
  <article 
    class="w-full flex justify-between border-2 rounded-lg items-center p-1 md:p-2 group hover:border-accent transition ease-in duration-500 ">
    <div>
      <h4 text-xl>{{ header }}</h4>
      <p opacity-75>{{ description }}</p>
    </div>
    <div i-carbon-logo-twitter w-10 h-10 group-hover:animate-bounce duraction-none> </div>
  </article>
</template>
