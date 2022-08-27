<template>
 <div class="container">
<h1>Learning Resource App</h1>
<stored-resources
:resources="storedresources"
>
</stored-resources>
</div>
</template>

<script>
import StoredResources from './components/learn/StoredResources.vue';

export default {
  name: 'App',
  components: {
   'stored-resources': StoredResources,
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

</style>
