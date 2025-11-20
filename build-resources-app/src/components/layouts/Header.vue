<script>
export default {
  props: ['title']
}

</script>
<template>
  <header>
    <h1>{{ title  }}</h1>
    <slot></slot>
  </header>
</template>
<style scoped>
header {
  text-align: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}
</style>