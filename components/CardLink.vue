<script setup>
defineProps({
  header: String,
  description: String
})
</script>
<template>
  <article 
    class="w-full flex justify-between border-2 rounded-lg items-center p-1 md:p-2 hover:border-accent transition ease-in duration-500 ">
    <div>
      <h4 text-xl>{{ header }}</h4>
      <p opacity-75>{{ description }}</p>
    </div>
    <slot/>
  </article>
</template>
