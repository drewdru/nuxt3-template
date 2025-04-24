<i18n locale="en" lang="yaml" src="@/utils/navigationData/locales/en.yml" />

<i18n locale="ru" lang="yaml" src="@/utils/navigationData/locales/ru.yml" />

<template>
  <CustomNuxtLink
    v-if="!link.includes('-')"
    :to="link"
  >
    <NCard class="content-card">
      <template #cover>
        <NuxtPicture
          v-if="image"
          class="content-card-cover-img"
          :src="image"
        />
      </template>
      <template #header>
        <NFlex align="center">
          <NTag
            round
            :bordered="false"
            :color="{ color: getTagColor(tag), textColor: '#1b0f1c' }"
          >
            {{ t(tag) }}
          </NTag>
          <NP class="content-card-date">
            {{ format(parseISO(date), 'dd/MM/yyyy') }}
          </NP>
        </NFlex>
        <NH3 class="content-card-header">
          {{ title }}
        </NH3>
      </template>
      <template #default>
        <NEllipsis
          :line-clamp="1"
          :tooltip="false"
        >
          <NP class="content-card-description">
            {{ description }}
          </NP>
        </NEllipsis>
      </template>
    </NCard>
  </CustomNuxtLink>
  <NSpin
    v-else
    class="loader"
  />
</template>

<script setup lang="ts">
import { format, parseISO } from "date-fns"
import { NCard, NH3, NP, NEllipsis, NTag, NFlex } from "naive-ui"
import { getTagColor } from "~/utils/navigationData/getTagColor"

const { t } = useI18n()
defineProps({
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
@use "./ContentPreviewCard" as *;
</style>
