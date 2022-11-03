<template>
  <section class="">
    <h3 class="">Contact</h3>
    <div class="grid grid-cols-2 gap-4">
      <NuxtLink to="https://www.linkedin.com/in/anders-bille-lind/">
        <CardLink header="Linkedin" description="Connect with me on Linkedin">
          <div i-carbon-logo-linkedin w-10 h-10></div>
        </CardLink>
      </NuxtLink>
      <NuxtLink to="https://www.github.com/billelind">
        <CardLink header="Github" description="Check out my projects on Github">
          <div i-carbon-logo-github w-10 h-10></div>
        </CardLink>
      </NuxtLink>
      <NuxtLink to="mailto:anders.bille.lind@gmail.com">
        <CardLink header="Email" description="Send my a email!">
          <div i-carbon-email w-10 h-10></div>
        </CardLink>
      </NuxtLink>
      <NuxtLink to="https://www.gitlab.com/billelind">
        <CardLink header="Gitlab" description="Or check out my projects on Gitlab">
          <svg w-10 h-10 viewBox="0 0 256 236"><path fill="#E24329" d="m128.075 236.075l47.104-144.97H80.97l47.104 144.97Z"/><path fill="#FC6D26" d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97Z"/><path fill="#FCA326" d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012l-113.12-144.97Z"/><path fill="#E24329" d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315Z"/><path fill="#FC6D26" d="m128.075 236.074l47.104-144.97h66.015l-113.12 144.97Z"/><path fill="#FCA326" d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012l113.119-144.97Z"/><path fill="#E24329" d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315Z"/></svg>
        </CardLink>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
