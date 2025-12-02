<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div class="flex py-4 px-6 mt-4 gap-4 max-w-[48%] mx-auto align-center justify-center">
    <div class="bg-white shadow-md flex-1">
      <h4 class="font-bold">Income</h4>
      <p id="money-plus" class="text-lime-800 font-bold">+ {{ income  }}</p>
    </div>
    <div class=" bg-white shadow-md flex-1">
      <h4 class="font-bold">Expense</h4>
      <p id="money-minus" class="text-red-500 font-bold">{{ expense }}</p>
    </div>
  </div>
</template>
