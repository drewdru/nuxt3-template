<i18n locale="en" lang="yaml" src="@/utils/navigationData/locales/en.yml" />

<i18n locale="ru" lang="yaml" src="@/utils/navigationData/locales/ru.yml" />

<template>
  <CustomNuxtLink
    :to="link"
    class="compact-content-card-link"
  >
    <NCard
      class="compact-content-card"
      size="small"
    >
      <template #cover>
        <NuxtPicture
          v-if="image"
          class="compact-content-card-cover-img"
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
          <NP class="compact-content-card-date">
            {{
              format(parseISO(date), 'dd/MM/yyyy')
            }}
          </NP>
        </NFlex>
        <NH3 class="compact-content-card-header">
          {{ title }}
        </NH3>
      </template>
    </NCard>
  </CustomNuxtLink>
</template>

<script setup lang="ts">
import { NCard, NH3, NP, NTag, NFlex } from "naive-ui"
import { format, parseISO } from "date-fns"
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
})
</script>

<style lang="scss">
@use "./CompactContentPreviewCard" as *;
</style>
