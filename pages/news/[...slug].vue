<template>
  <NuxtLayout name="article">
    <template #article>
      <template v-if="docs">
        <ContentRenderer :value="docs" />
      </template>
    </template>
    <template #article-navigation>
      <LatestNews orientation="vertical" />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const slug = useRoute().params.slug

const { data: docs } = await useAsyncData(`news_${locale.value}_${slug}`, () =>
  queryCollection(`news_${locale.value}`).path(`/${locale.value}/news/${slug}`).first(),
)
</script>
