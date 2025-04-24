<i18n locale="en" lang="yaml" src="./locales/en.yml" />

<i18n locale="ru" lang="yaml" src="./locales/ru.yml" />

<template>
  <div class="article-go-back">
    <NDivider />
    <NButton
      secondary
      @click="goBack"
    >
      <template #icon>
        <NIcon>
          <ArrowBackRound />
        </NIcon>
      </template>
      {{ t("GoBack") }}
    </NButton>
  </div>
</template>

<script setup lang="ts">
import { ArrowBackRound } from "@vicons/material"

const { t } = useI18n()
const router = useRouter()

const userStore = useUserStore()
const { historyStartPosition } = storeToRefs(userStore)

const goBack = () => {
  if (window.history.length - historyStartPosition.value > 0) {
    router.back()
  }
  else {
    navigateTo("/")
  }
}
</script>
