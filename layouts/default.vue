<template>
  <NLayout>
    <LanguageSelector />
    <div class="layout-content">
      <slot />
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
      content: "Put translated keywords here",
    },
  ],
})
</script>
