<template>
  <NPopselect
    :key="locale"
    :value="locale"
    class="language-select"
    :options="languageOptions"
    :render-label="(option: any) => `${t(option.label())}`"
    @update:value="changeLanguage"
  >
    <NButton quaternary class="quaternary-button">
      <NSpace>
        <NIcon>
          <Globe />
        </NIcon>
        {{ locale.toUpperCase() }}
      </NSpace>
    </NButton>
  </NPopselect>
</template>

<script setup lang="ts">
import {
  NSpace,
  NButton,
  NPopselect,
  NIcon,
} from "naive-ui"
import { Globe } from "@vicons/fa"
import { getLanguageOptions } from "@/utils/constants/getLanguageOptions"
import { useLangStore } from "@/stores/lang"
const { t, locale, setLocale } = useI18n()
const langStore = useLangStore()
const languageOptions = getLanguageOptions()
const changeLanguage = (value: string) => {
  langStore.setLang(value, setLocale)
}

</script>