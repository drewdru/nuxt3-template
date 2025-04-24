<i18n locale="en" lang="yaml" src="@/utils/navigationData/locales/en.yml" />

<i18n locale="ru" lang="yaml" src="@/utils/navigationData/locales/ru.yml" />

<template>
  <div :class="`content-preview-cards ${orientation}`">
    <div
      class="content-preview-cards-grid grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3"
      :cols="orientation === 'horizontal' ? '3 xs:1 s:1 m:2 l:3' : 1"
      responsive="screen"
      y-gap="24"
      x-gap="24"
    >
      <div
        v-for="item in items"
        :key="item.id"
      >
        <div
          v-if="orientation === 'horizontal'"
          class="card-wrapper"
        >
          <ContentPreviewCard
            :link="item.path"
            :image="item.image"
            :date="item.date"
            :tag="item.tag"
            :title="item.title"
            :description="item.description"
          />
        </div>
        <div
          v-else
          class="card-wrapper"
        >
          <CompactContentPreviewCard
            :link="item.path"
            :image="item.image"
            :date="item.date"
            :tag="item.tag"
            :title="item.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const { t, locale } = useI18n()
// const localePath = useLocalePath()

interface CardItem {
  id: string | number
  link: string
  date: string
  tag: string
  title: string
  image?: string
  description?: string
}
defineProps({

  orientation: String,

  items: Array as () => CardItem[],
})
</script>

<style lang="scss">
@use "./contentPreviewCards" as *;
</style>
