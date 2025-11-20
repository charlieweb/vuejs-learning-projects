<script>

import Header from './components/layouts/Header.vue'
import Resources from './components/learning-resources/Resources.vue'
export default {
  components: {
    Header,
    Resources
  }
}
</script>

<template>
  <Header title="Learning Resources"></Header>
  <resources></resources>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
