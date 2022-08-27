<template>

<base-card>
<form>
<div class="form_control">
<label for="title"> Title:</label>
<input  id="title" name="title" type="text"/>
</div>

<div class="form_control">
<label for="description">Describtion: </label>
<textarea id="description" name="description" rows="3"> </textarea>
</div>

<div class="form_control">
<label for="link"> Link:</label>
<input id="link" name="link" type="url"/>
<base-button :type="submit">Add Resource</base-button>
</div>

</form>
</base-card>
  
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';

export default {
  components: { BaseButton },
 methods:{
 submitData()
 {

 },

 },
 
 
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  margin: 1rem auto;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>