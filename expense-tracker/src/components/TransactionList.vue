<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  transactions: {
    type: Array
  }
})
const emits = defineEmits(['delete-transaction'])
function deleteTransaction(id) {
  emits('delete-transaction', id);
}
</script>
<template>
 <div v-if="transactions.length > 0">
  <h3 class="font-bold text-lg">History</h3>
  <ul class="max-w-lg mx-auto">
    <li
      v-for="items in transactions"
      :key="items.id"
      class="flex justify-between bg-white shadow-sm p-2 my-2 relative"
    >
      <button
        class="text-large uppercase text-red-500 cursor-pointer absolute -translate-x-full -translate-y-0.2"
        @click="deleteTransaction(items.id)"
      >
        x
      </button>
      <span class="block ml-1">{{ items.text }}</span>
      <span :class="items.amount < 0 ? 'text-red-500' : 'text-green-500'">
        ${{ items.amount }}
      </span>
    </li>
  </ul>
  </div>
  <p v-else class="text-center font-bold text-3xl pt-2.5">No transactions available.</p>
</template>
