<script setup lang="ts">
import type { IDataElement } from "@/types/IDataElement";
import { defineProps } from "vue";

const props = defineProps<{
  element: IDataElement;
}>();

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  console.log("test");
};
</script>

<template>
  <li @click="(e) => handleClick(e)">
    <a :href="props.element.link">
      <p>{{ props.element.name }}</p>
    </a>
  </li>
</template>
