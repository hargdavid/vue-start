<script setup lang="ts">
import ProductEl from "@/components/ProductEl/ProductEl.vue";
import type { IDataElement } from "@/types/IDataElement";
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  data: IDataElement[];
}>();
</script>

<template>
  <h1>{{ title }}</h1>
  <ul v-for="element in props.data" v-bind:key="element.id">
    <ProductEl :element="element" />
  </ul>
</template>
