<template>
 <div class="container">
<the-header title="RememberMe"></the-header>
<stored-resources
:resources="storedresources"
>
</stored-resources>
</div>
</template>

<script>
import StoredResources from './components/learn/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  name: 'App',
  components: {
   'stored-resources': StoredResources,
   'the-header':TheHeader,
  },

   data() {
    return {
      storedresources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "the official vue js documentation",
          link: "https://cli.vuejs.org/guide/creating-a-project.html#vue-create",
        },
        {
          id: "google",
          title: "Google",
          description: "the google website",
          link: "https://www.google.com/",
        },
      ],
    };
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
