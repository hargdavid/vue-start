<script setup lang="ts">
import { RouterView } from "vue-router";
import { mapActions } from "vuex";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper.vue";
</script>

<script lang="ts">
export default {
  methods: {
    ...mapActions(["getData"]),
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
  <LayoutWrapper>
    <RouterView />
  </LayoutWrapper>
</template>

<style></style>
