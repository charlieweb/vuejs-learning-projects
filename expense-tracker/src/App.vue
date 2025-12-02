<script setup>
import { ref, computed } from 'vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
const transactions = ref([
  { id: 1, text: 'Flower', amount: -10 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
]);
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0);
});

const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

const expense = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
})
</script>

<template>
  <Header />
  <div class="container text-center mx-auto p-4">
    <Balance :total="total"/>
    <IncomeExpense :income="income" :expense="expense" />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<style>

</style>
