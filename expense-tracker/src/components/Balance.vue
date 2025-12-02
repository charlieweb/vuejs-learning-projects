<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <h4 class="font-bold">Your Balance</h4>
  <div class="font-bold text-2xl">{{ total }}</div>
</template>