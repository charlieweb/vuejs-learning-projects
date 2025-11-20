<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Resource Title</label>
        <input type="text" id="title" />
      </div>
      <div class="form-control">
        <label for="description">Resource Description</label>
        <textarea id="description" rows="4"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Resource Link</label>
        <input type="url" id="link" />
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