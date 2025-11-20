<script>
export default {
  name: "AddResources",
  inject: ['addResource'],
  data() {
      return {
        inputisInvalid: false,
      };
    },
  methods: {
    submitData () {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if (
        enteredTitle.trim() === '' ||
        enteredTitle.trim() === '' ||
        enteredTitle.trim() === ''
      ) {
        this.inputisInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDesc, enteredLink);
    },
    confirmInvalid () {
      this.inputisInvalid = false;
    }
  }
};
</script>
<template>
  <modal-window v-if="inputisInvalid" title="Invalid Input" @close="confirmInvalid">
    <template #default>
      <p>Please enter valid data for all fields.</p>
    </template>
    <template #actions>
      <base-button @click="confirmInvalid" mode="primary">Okay</base-button>
    </template>
  </modal-window>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Resource Title</label>
        <input type="text" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Resource Description</label>
        <textarea id="description" rows="3" name="description" ref="descInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Resource Link</label>
        <input type="url" id="link"  ref="linkInput"/>
      </div>
      <div class="form-actions">
        <base-button type="submit" mode="primary">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>