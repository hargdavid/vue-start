<script setup lang="ts"></script>

<template>
  <form @submit.prevent="onSubmit">
    <label>Email</label>
    <input type="email" v-model="email" />
    <button>Submit</button>
  </form>

  {{ email }}
</template>

<script lang="ts">
export default {
  data() {
    return { email: "", text: 2 };
  },
  methods: {
    onSubmit() {
      console.log("submitted");
      /* console.log(form); */
    },
  },
};
</script>
