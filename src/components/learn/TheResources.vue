<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="StoredButton">Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="AddButton">Add Resource
        </base-button>
    </base-card>

    <component :is="selectedTab"> </component>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        BaseButton,
        'stored-resources': StoredResources,
        'add-resource': AddResource,
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
            selectedTab: 'stored-resources',

        };
    },
    provide() {
      return {
            resources: this.storedresources,
        };
    },
    methods:
    {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
    },
    computed:{
    StoredButton (){
   return this.selectedTab==='stored-resources' ? null:'flat';
    },
    AddButton()
    {
     return this.selectedTab==='add-resource' ? null:'flat';
    },

    },


};
</script>

<style scoped>
</style>
