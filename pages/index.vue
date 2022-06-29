<script>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <main text-2xl mt-20 max-w-80% sm:max-w-60% mx-auto>

    <p lg:ml-10% text-xl sm:text-2xl md:text-3xl lg:text-4xl>{{ getGreeting() }}</p>
    <h1 heading ml-5% lg:ml-15%> I am Anders Bille Lind,
      <br><em text-purple-700 dark:text-purple-600 ml-5%>a Developer</em>,
      <br><em ml-10%> a Father</em> <br sm:display-none><span ml-15% sm:ml-0 text-base md:text-lg lg:text-xl op-70>
        and bunch of other things
      </span>
    </h1>


    <section mt-20>
      <h2 heading boder-2 border-b border-dashed>Tool Box</h2>

      <div grid grid-cols-5 m-3 gap-6>
        <Icon logo="i-logos-laravel">Laraval</Icon>
        <Icon logo="i-logos-vue">Vue</Icon>
        <Icon logo="i-logos-nuxt-icon">Nuxt</Icon>
        <Icon logo="i-logos-fastify-icon">Fastify</Icon>
        <Icon logo="i-logos-nodejs-icon">Node</Icon>
        <Icon logo="i-logos-tailwindcss-icon">Tailwindcss</Icon>
        <Icon logo="i-logos-vitejs">Vitejs</Icon>
        <Icon logo="i-logos-git-icon">Git</Icon>
       <!--  <Icon logo="i-logos-"></Icon>
        <Icon logo="i-logos-"></Icon>
        <Icon logo="i-logos-"></Icon>
        <Icon logo="i-logos-"></Icon> -->

        <Icon logo="i-logos-react">React</Icon>
      </div>
    </section>



    <section mt-20>
      <h2 heading>Projects</h2>

    </section>

    <section mt-20>
      <h2 heading>Articles</h2>

    </section>



  </main>
</template>


  Index page

        opbygning:
        - intro + billede evt. knap til en about side
          => aboute side => far + datamatiker osv, nævn skoler, arbejder og anden erfaring eller oplevelser
        - projekter
        - færdigheder => med eksempler, evt. visning med hover eller læs mere.away
        - toolbox => bærbar, kontor osv.
