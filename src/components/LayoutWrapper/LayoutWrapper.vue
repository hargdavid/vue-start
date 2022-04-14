<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<script lang="ts">
export default {
  props: {
    children: [],
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/trees">Trees in New York</RouterLink>
      </nav>
    </div>
  </header>
  <slot />
  <footer></footer>
</template>
