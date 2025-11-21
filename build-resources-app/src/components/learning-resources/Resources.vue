<script>
import StoredResources from './StoredResources.vue'
import AddResources from './AddResources.vue'
export default {
  data () {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js guide.',
          link: 'https://vuejs.org/guide/introduction.html'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Search the web with Google.',
          link: 'https://www.google.com'
        }
      ]
    }
  },
  computed: {
    storeResButtons() {
      return this.selectedTab === 'stored-resources' ? 'active' : null;
    },
    addResButton() {
      return this.selectedTab === 'add-resources' ? 'active' : null;
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.AddResources,
      deleteResource: this.deleteResource
    }
  },
  components: {
    'stored-resources': StoredResources,
    'add-resources': AddResources
  },
  methods: {
    setSelectedTab (tab) {
      this.selectedTab = tab;
    },
    AddResources (title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource (resourceId) {
     const resourceindex = this.storedResources.findIndex(res => res.id === resourceId);
     this.storedResources.splice(resourceindex, 1);
    }
  }
}
</script>

<template>
  <base-card>
  <base-button @click="setSelectedTab('stored-resources')" :mode="storeResButtons">Stored Resources</base-button>
  <base-button @click="setSelectedTab('add-resources')" :mode="addResButton">Add Resource</base-button>
  </base-card>
  <keep-alive>  
  <component :is="selectedTab"></component>
  </keep-alive>
</template>
