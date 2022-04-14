<script lang="ts">
import type { IDataElement } from "@/types/IDataElement";

type Props = {
  element?: IDataElement;
};

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  console.log("test");
};

export default {
  props: (): Props => {
    return {
      element: undefined,
    };
  },
};
</script>

<template>
  <li v-if="element" @click="(e) => handleClick(e)">
    <p>{{ element.name }}</p>
    <a :href="`mailto:${element.email}`">{{ element.email }}</a>
  </li>
</template>
