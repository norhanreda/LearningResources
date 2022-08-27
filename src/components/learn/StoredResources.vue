<template>
<ul>
<learning-resource
 v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"

>

</learning-resource>
</ul>
  
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
 
 
  props: ['resources'],
 components:{
    'learning-resource':LearningResource,
 }
};
</script>

<style scoped>




</style>