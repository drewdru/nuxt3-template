<template>
  <div class="article-image">
    <NImage
      :render-toolbar="renderToolbar"
      :src="src"
      width="100%"
    />
  </div>
</template>

<script setup lang="ts">
import { NImage } from "naive-ui"
import type { ImageRenderToolbarProps } from "naive-ui"

defineProps({
  src: {
    type: String,
    default: "Default text",
  },
})

const renderToolbar = ({ nodes }: ImageRenderToolbarProps) => {
  return [
    nodes.prev,
    nodes.next,
    nodes.zoomIn,
    nodes.zoomOut,
    nodes.download,
    nodes.close,
  ]
}
</script>

<style lang="scss">
@use "./articleImage" as *;
</style>
