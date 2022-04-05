<script setup lang="ts">
import { fetchData } from "@/api/fetchData";
import LoaderEl from "@/components/LoaderEl/LoaderEl.vue";
import ProductList from "@/components/ProductList/ProductList.vue";
import type { IDataElement } from "@/types/IDataElement";
</script>

<template>
  <LoaderEl v-if:="loading"></LoaderEl>
  <ProductList title="Träd i New York" :data="data" />
</template>

<script lang="ts">
export default {
  data() {
    return {
      loading: true,
      data: [] as IDataElement[],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const dataFetch = async () => {
        const response = await fetchData();
        if (response) {
          this.data = response.splice(0, 5);
        }
      };
      this.loading = true;
      dataFetch();

      setTimeout(() => {
        this.loading = false;
      }, 200);
    },
  },
};
</script>
