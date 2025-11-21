<script>
export default {
  inject: ['deleteResource'],
  props: ['id','title', 'description', 'link'],
}
</script>
<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button @click="deleteResource(id)">Delete</base-button>
      </header>
    
    <p>{{  description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
    </base-card>
  </li>
</template>

<style scoped>
li {
  list-style: none;

  border-radius: 4px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  text-transform: uppercase;
  color: #313647;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0.5rem 0;
}
p {
  font-size: 1rem;
  color: #555;
}
nav a {
  color: #FF6C0C;
  text-decoration: none;
}
</style>
