<script>
import LearningResource from './LearningResource.vue';
export default {
  components: {
    LearningResource
  },
  inject: ['resources']
}
</script>
<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    >
    </learning-resource>
  </ul>
</template>

<style scoped>
  ul {
  list-style: none;
  padding: 0;
  margin: auto;
  margin-top: 2rem;
  max-width: 40rem;
}
</style>
