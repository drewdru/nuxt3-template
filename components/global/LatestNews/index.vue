<i18n locale="en" lang="yaml" src="@/utils/navigationData/locales/en.yml" />

<i18n locale="ru" lang="yaml" src="@/utils/navigationData/locales/ru.yml" />

<i18n locale="en" lang="yaml" src="./locales/en.yml" />

<i18n locale="ru" lang="yaml" src="./locales/ru.yml" />

<template>
  <div class="latest-news">
    <NH2>{{ t("LatestNews") }}</NH2>
    <ContentPreviewCards
      :orientation
      :items="newsData"
    />
    <CustomNuxtLink
      :to="localePath('/news')"
      :lazy="false"
    >
      <NButton
        secondary
        class="latest-news-button"
      >
        {{ t("MoreNews") }}
      </NButton>
    </CustomNuxtLink>
  </div>
</template>

<script setup lang="ts">
import { NH2, NButton } from "naive-ui"

const { t } = useI18n()
const localePath = useLocalePath()

defineProps({

  orientation: String,
})

const { locale } = useI18n()
const slug = useRoute().params.slug
const { data: newsData } = await useAsyncData(`latest_news_${locale.value}_${slug}`, () =>
  queryCollection(`news_${locale.value}`)
    .order("date", "DESC")
    .limit(3)
    .all(),
)
</script>

<style lang="scss">
@use "./news" as *;
</style>
