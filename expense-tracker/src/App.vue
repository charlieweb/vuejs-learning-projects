<script setup>
import { ref, computed, onMounted } from 'vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { toast } from 'vue3-toastify';
const API_URL = import.meta.env.VITE_API_URL;
const transactions = ref([]);
function handleTransaction(newTransaction) {
  transactions.value.push(newTransaction);
}
// Load transactions from backend on mount
const loadTransactions = async () => {
  try {
    const response = await fetch(
      `${API_URL}/expense.json`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch transactions.');
    }
    const data = await response.json();
    const loadedTransactions = [];
    for (const key in data) {
      loadedTransactions.push({
        id: key,
        text: data[key].text,
        amount: data[key].amount
      });
    }
    transactions.value = loadedTransactions;
  } catch (error) {
    toast.error('Failed to load transactions.');
  }
};
// Total calculation
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0);
});
// Income calculation
const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});
// Expense calculation
const expense = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
})
// Delete transaction handler
const handleTransactionDelete = async (id) => { 
  try { 
    const response = await fetch(
      `${API_URL}/expense/${id}.json`,
      { method: 'DELETE' }
    );
    if (!response.ok) {
      throw new Error('Failed to delete transaction.');
    }
    const index = transactions.value.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      transactions.value.splice(index, 1);
    }
    toast.success('Transaction deleted successfully');
  }
  catch(error) {
    toast.error('Failed to delete transaction.');
  } 
}
onMounted(loadTransactions);
</script>

<template>
  <Header />
  <div class="container text-center mx-auto p-4">
    <Balance :total="+total"/>
    <IncomeExpense :income="+income" :expense="+expense" />
    <TransactionList :transactions="transactions"  @delete-transaction="handleTransactionDelete"/>
    <AddTransaction @add-transaction="handleTransaction" />
  </div>
</template>
