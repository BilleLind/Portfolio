<script setup lang="ts">
useHead({
  title: "Anders Bille Lind's Portfolio",
  meta: [{
    name: 'author',
    content: 'Anders Bille Lind'
  }],
  link: [
    {
      rel: 'icon', href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
@media (prefers-color-scheme:dark) {
 html {
   color-scheme: dark;
 }
}
</style>
