<template>
  <div class="article-text-with-header">
    <NH3>{{ title }}</NH3>
    <NP>{{ text }}</NP>
  </div>
</template>

<script setup lang="ts">
import { NH3 } from "naive-ui"

defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  text: {
    type: String,
    default: "Default text",
  },
})
</script>

<style lang="scss">
.article-text-with-header {
  margin-bottom: globalvariables.$margin-medium;
}
</style>
