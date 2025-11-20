<script>
export default {
  props: ['type', 'mode']
}
</script>
<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
<style scoped>
button {
  font: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  background-color: #ff6c0c;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
}
button:hover,
button:active {
  background-color: #ff7f24;
}

button.active {
  background-color: #313647;
}
</style>
