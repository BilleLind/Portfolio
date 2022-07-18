<script setup lang="ts">
defineProps<{ logo: string }>()
</script>


<template>
  <div flex items-center border-1 border-gray p-2 rounded-lg>
    <i mr-1 md:mr-2 h-7 w-7 md:h-8 md:w-8 xl:h-10 xl:w-10 :class="logo"></i>
    <h4 text-base md:text-lg lg:text-xl truncate>
      <slot />
    </h4>
  </div>
</template>
