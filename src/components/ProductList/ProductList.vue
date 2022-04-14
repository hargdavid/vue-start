<script setup lang="ts">
import ProductEl from "@/components/ProductEl/ProductEl.vue";
import { mapState } from "vuex";
</script>

<template>
  <h1>{{ title }}</h1>
  <ul v-for="(d, key) in data" v-bind:key="key">
    <ProductEl :element="d" />
  </ul>
</template>

<script lang="ts">
type Props = {
  title: string;
};

export default {
  props: (): Props => {
    return {
      title: "",
    };
  },
  computed: {
    ...mapState({
      data: "data",
    }),
  },
};
</script>
