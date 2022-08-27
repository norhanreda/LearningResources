<template>
 <div class="container">
<the-header title="RememberMe"></the-header>
<!-- <stored-resources
:resources="storedresources"
>
</stored-resources> -->
<the-resources>
</the-resources>
</div>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learn/TheResources.vue';

export default {
  name: 'App',
  components: {
   
   'the-header':TheHeader,
    'the-resources':TheResources,
  },

   data() {
    return {
      
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
