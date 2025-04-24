<i18n locale="en" lang="yaml" src="@/components/global/News/locales/en.yml" />
<i18n locale="ru" lang="yaml" src="@/components/global/News/locales/ru.yml" />

<template>
  <News />
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
useHead({
  meta: [{ name: "description", content: t("News") }],
  htmlAttrs: { lang: locale.value },
  titleTemplate: "Template - %s",
  title: t("News"),
})
</script>
