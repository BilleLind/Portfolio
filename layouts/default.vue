<script lang="ts" setup>
import { ref } from 'vue'
import { toggleDark } from '@/composables/dark'
const hovered = ref('none')


</script>

<template>
  <div>
    <header class="max-w-11/12 lg:max-w-9/12  mx-auto text-xl relative" @mouseleave="hovered = 'none'">
      <div class="flex justify-between items-center">

        <NuxtLink to="/">Bille<span class="italic">Lind</span>
        </NuxtLink>

        <div class="flex gap-x-3 py-3">
          <button class="hover:text-accent flex" id="nav-about" @mouseenter="hovered = 'about'"
            @click="hovered === 'about' ? hovered = 'none' : hovered = 'about'">
            <span class="hidden sm:flex">About</span>
            <div class="i-carbon-fingerprint-recognition my-auto sm:hidden"></div>
            <div class="i-carbon-chevron-down mt-auto"></div>
          </button>
          <!-- <button class="hover:text-accent flex" id="nav-projects" @mouseenter="hovered = 'projects'"
          @click="hovered === 'projects' ? hovered = 'none' : hovered = 'projects'">
          <span class="hidden sm:flex">Projects & Resources</span>
          <span class="i-carbon-explore my-auto sm:hidden"></span>
          <div class="i-carbon-chevron-down mt-auto"></div>
        </button> -->
          <button @click="toggleDark()" title="Theme toggle" i-carbon-sun dark:i-carbon-moon hover:opacity-75
            class="text-violet-800" dark:text-golden text-2xl></button>
        </div>
      </div>


      <nav class="text-sm text-base md:text-lg">

        <section v-if="hovered === 'about'" class="absolute w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 pb-8">
          <div class="col-span-1 lg:col-span-3">

          </div>
          <div class="col-span-2 ">
            <h2 class="opacity-75 text-sm md:text-base mb-1">Snapshot</h2>
            <div class="flex gap-x-2 ">

              <NuxtLink to="/about" class="nav-btn">
                <div i-carbon-fingerprint-recognition my-auto mr-1 animate-pulse text-accent
                  motion-reduce:animate-none />
                Get to know Me
              </NuxtLink>
              <NuxtLink to="/about/cv" class="nav-btn hover:border-vio ">
                <div i-carbon-document my-auto mr-1 text-vio /> Curriculum
                Vitae
              </NuxtLink>
            </div>
          </div>


        </section>
        <!-- <section v-else-if="hovered === 'projects'" class="absolute w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 pb-8">
        <div class="hidden sm:grid lg:grid-col-span-3"></div>
        <div class="opacity-75 text-base mb-1">
          Project
        </div>
        <div class="opacity-75 text-base mb-1">
          Resources
        </div>
      </section> -->
        <div v-if="hovered === 'none'" class="rounded-b-lg border-b-2 border-dark/75 dark:border-light/75"></div>
      </nav>
    </header>


    <slot />
  </div>
</template>
