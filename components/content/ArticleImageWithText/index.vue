<template>
  <div class="article-image">
    <NImage
      :render-toolbar="renderToolbar"
      :src="src"
      width="100%"
    />
    <NText
      italic
      class="image-text"
    >
      {{ text }}
    </NText>
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
  text: {
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
