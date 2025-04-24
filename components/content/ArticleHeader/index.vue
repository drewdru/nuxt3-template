<i18n locale="en" lang="yaml" src="@/utils/navigationData/locales/en.yml" />
<i18n locale="ru" lang="yaml" src="@/utils/navigationData/locales/ru.yml" />

<template>
  <div class="article-header">
    <NH1 class="text-5xl md:text-7xl">
      {{ title }}
    </NH1>
    <NFlex align="center">
      <NTag
        round
        :bordered="false"
        :color="{ color: getTagColor(tag), textColor: '#1b0f1c' }"
      >
        {{ t(tag) }}
      </NTag>
      <NP class="article-header-date">
        {{ date }}
      </NP>
    </NFlex>
    <NDivider />
  </div>
</template>

<script setup lang="ts">
import { getTagColor } from "~/utils/navigationData/getTagColor"

const { t } = useI18n()
defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  date: {
    type: String,
    default: "Default date",
  },
  tag: {
    type: String,
    default: "Default tag",
  },
})
</script>

<style lang="scss">
@use "./ArticleHeader" as *;
</style>
