<script setup lang="ts">
import { mapState } from "vuex";
import SubmitForm from "../components/SubmitForm/SubmitForm.vue";
</script>

<template>
  <div v-if="loading">...Laddar</div>

  {{ count }}

  <SubmitForm />
</template>

<script lang="ts">
export default {
  name: "HomeView",
  computed: mapState({ count: "count", loading: "loading" }),
};
</script>
