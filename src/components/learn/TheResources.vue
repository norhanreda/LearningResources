<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="StoredButton"
      >Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="AddButton"
      >Add Resource
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="selectedTab"> </component>
  </keep-alive>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    BaseButton,
    "stored-resources": StoredResources,
    "add-resource": AddResource,
    
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
      selectedTab: "stored-resources",
    };
  },
  provide() {
    return {
      resources: this.storedresources,
      addresource: this.AddResource,
      removeresource:this.RemoveResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    AddResource(Title, Description, Link) {
      const newResorce = {
        id: new Date().toISOString(),
        title: Title,
        description: Description,
        link: Link,
      };

      this.storedresources.unshift(newResorce);
      this.selectedTab = "stored-resources";
    },
    RemoveResource(resID)
    {
       const index=this.storedresources.findIndex(res => res.id === resID);
       this.storedresources.splice(index,1);
    },
  },
  computed: {
    StoredButton() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    AddButton() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
};
</script>

<style scoped></style>
