<template>
  <li>
    <div>
      <header>
        <h3> {{title}}</h3>
        <button>Delete</button>
      </header>
    </div>

    <p> {{description}}</p>
    <nav>
      <a v-bind:href="link"> View Reasource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title','description','link'],
 
};
</script>

<style scoped>
li
{
text-align: left;
border: 0.1rem solid black;
padding:1rem;
margin: 1rem;
background-color:pink;

}

a:hover{

    color:red;
}



</style>