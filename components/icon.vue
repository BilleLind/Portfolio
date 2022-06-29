<script setup lang="ts">
defineProps<{ logo: string }>()
</script>


<template>
  <h4 flex border-1 border-gray p-2 rounded-lg max-w-min><i mr-1 md:mr-2 :class="'i-logos-' + logo"></i>
    <slot />
  </h4>
</template>
