<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    transactions: {
      type: Array,
    },
  });
</script>
<template>
  <h3 class="font-bold text-lg">History</h3>
  <ul class="max-w-lg mx-auto">
    <li v-for="items in transactions" :key="items.id" class="flex justify-between bg-white shadow-sm p-2 my-2">{{ items.text  }}
      <span :class="items.amount < 0 ? 'text-red-500' : 'text-green-500'">
        ${{ items.amount }}
      </span>
    </li>
  </ul>
</template>