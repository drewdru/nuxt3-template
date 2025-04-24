<i18n locale="en" lang="yaml" src="./locales/en.yml" />

<i18n locale="ru" lang="yaml" src="./locales/ru.yml" />

<template>
  <NButton>{{ t("Home") }}</NButton>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
})

const { t } = useI18n()
useSeoMeta({
  title: t("Home"),
  ogTitle: t("Home"),
  description: t("HomeDescription"),
  ogDescription: t("HomeDescription"),
  twitterDescription: t("HomeDescription"),
})
</script>
