<script setup>
import { ref, defineEmits } from 'vue'
import { toast } from 'vue3-toastify'
const API_URL = import.meta.env.VITE_API_URL
const text = ref('');
const amount = ref('');
const emit = defineEmits(['add-transaction']);
const onSubmit = async () => {
  if (!text.value || !amount.value) {
    toast.error('Please enter both text and amount');
    return
  }
  const newTransaction = {
    text: text.value,
    amount: +amount.value
  }
  // Submit the new transaction to the backend API
  try {
    const response = await fetch(`${API_URL}/expense.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    if (!response.ok) {
      throw new Error('Failed to submit Expense.');
    }
  } catch (error) {
    toast.error('Failed to submit Expense.');
  }

  emit('add-transaction', newTransaction)
  toast.success('Transaction added successfully');
  
  // Clear the form
  amount.value = ''
  text.value = ''
}
</script>
<template>
  <h3 class="font-bold text-lg mt-3 pt-3">Add new transaction</h3>
  <form id="form" class="container mx-auto max-w-lg" @submit.prevent="onSubmit">
    <div>
      <label
        for="text"
        class="block mb-2.5 text-sm font-medium text-heading pt-4"
        >Transaction Name</label
      >
      <input
        type="text"
        id="text"
        class="bg-neutral-secondary-medium border text-sm rounded-base focus:ring-brand w-full block px-3 py-2.5 shadow-xs placeholder:text-body"
        placeholder="Enter text"
        v-model="text"
      />
    </div>
    <div class="mt-2 form-control">
      <label class="text-lg" for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        class="bg-neutral-secondary-medium border text-sm rounded-base focus:ring-brand w-full block px-3 py-2.5 shadow-xs placeholder:text-body"
        type="text"
        id="amount"
        v-model="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="bg-green-300 rounded-md p-2 mt-4">Add transaction</button>
  </form>
</template>
