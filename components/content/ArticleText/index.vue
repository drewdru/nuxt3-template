<template>
  <div class="article-text">
    <NP>{{ text }}</NP>
  </div>
</template>

<script setup lang="ts">
import { NP } from "naive-ui"

defineProps({
  text: {
    type: String,
    default: "Default text",
  },
})
</script>

<style lang="scss">
.article-text {
  margin-bottom: globalvariables.$margin-medium;
}
</style>
