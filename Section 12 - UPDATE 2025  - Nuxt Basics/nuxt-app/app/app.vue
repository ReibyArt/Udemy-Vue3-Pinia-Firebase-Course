<template>
  <div>
   <nuxt-page></nuxt-page>
  </div>
</template>


<script setup>

  // UseHead support reactivity! This is imoprtant!!!!
  useHead({
    title: "My Awesome App",
    meta: [{ name: 'description', content: 'Some Content Description'}],
    link: [{ rel: 'stylesheet', href: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">'}]
  })

</script>