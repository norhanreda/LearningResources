<template>
<base-card>
  <li>
    
      <header>
        <h3> {{title}}</h3>
        <base-button
        
        mode="flat"
        >Delete</base-button>
      </header>
    

    <p> {{description}}</p>
    <nav>
      <a  target="_blank" v-bind:href="link"> View Reasource</a>
    </nav>
  </li>
  </base-card>
</template>

<script>


export default {

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