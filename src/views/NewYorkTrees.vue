<script setup lang="ts">
import LoaderEl from "@/components/LoaderEl/LoaderEl.vue";
import ProductList from "@/components/ProductList/ProductList.vue";
import { mapState } from "vuex";
</script>

<template>
  <LoaderEl v-if:="loading"></LoaderEl>
  <ProductList title="Träd i New York" />
</template>

<script lang="ts">
export default {
  computed: {
    ...mapState({ loading: "loading" }),
  },
};
</script>
