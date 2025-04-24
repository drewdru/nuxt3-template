<template>
  <NLayout>
    <div class="page-container-default">
      <div
        class="page-article-grid grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 p-4 m:p-8 xl:p-16"
      >
        <article class="article col-span-2">
          <slot name="article" />
          <slot />
        </article>
        <div class="article-navigation">
          <slot name="article-navigation" />
        </div>
      </div>
    </div>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout } from "naive-ui"
const { locale } = useI18n()
useHead({
  htmlAttrs: { lang: locale.value },
  titleTemplate: "Template - %s",
  meta: [
    {
      name: "keywords",
      content: 't("Template")',
    },
  ],
})
</script>

<style lang="scss">
.page-article-grid {
  width: 100%;
  gap: globalvariables.$block-gap;
}
</style>
