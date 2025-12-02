<template>
   <h3 class='font-bold text-lg mt-3 pt-3'>Add new transaction</h3>
      <form id="form" class="container mx-auto max-w-lg">
        <div>
            <label for="text" class="block mb-2.5 text-sm font-medium text-heading">Text</label>
            <input type="text" id="text" class="bg-neutral-secondary-medium border text-sm rounded-base focus:ring-brand w-full block  px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Enter text" required />
        </div>
        <div class='mt-2 form-control'>
          <label class=" text-lg" for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input class="bg-neutral-secondary-medium border text-sm rounded-base focus:ring-brand w-full block  px-3 py-2.5 shadow-xs placeholder:text-body" type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button class=" bg-green-300 rounded-md p-2 mt-4">Add transaction</button>
      </form>
</template>