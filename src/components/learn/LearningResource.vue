<template>
<base-card>
  <li>
    
      <header>
        <h3> {{title}}</h3>
        <button>Delete</button>
      </header>
    

    <p> {{description}}</p>
    <nav>
      <a v-bind:href="link"> View Reasource</a>
    </nav>
  </li>
  </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
  components: { BaseCard },
  props: ['title','description','link'],
 
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a:hover{

    color:red;
}



</style>