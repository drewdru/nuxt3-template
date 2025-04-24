<i18n locale="en" lang="yaml" src="@/utils/naiveUiL18n/locales/en.yml" />

<i18n locale="ru" lang="yaml" src="@/utils/naiveUiL18n/locales/ru.yml" />

<template>
  <naive-config>
    <NConfigProvider
      :theme="darkTheme"
      :theme-overrides="darkThemeOverrides"
      :locale="getNaiveUiLocale(t, locale)"
      :date-locale="getNaiveUiDateLocale(locale)"
    >
      <NLoadingBarProvider>
        <NMessageProvider>
          <NNotificationProvider placement="top-right">
            <NDialogProvider>
              <NuxtLayout>
                <NuxtPage />
              </NuxtLayout>
            </NDialogProvider>
          </NNotificationProvider>
        </NMessageProvider>
      </NLoadingBarProvider>
    </NConfigProvider>
  </naive-config>
</template>

<script setup lang="ts">
import {
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NConfigProvider,
  darkTheme,
} from "naive-ui"
import {
  getNaiveUiLocale,
  getNaiveUiDateLocale,
} from "@/utils/naiveUiL18n/naiveUiLocalization"
import { darkThemeOverrides } from "@/utils/constants/themes"

const { t, locale } = useI18n()
const { colorModePreference } = useNaiveColorMode()
colorModePreference.set("dark")
</script>
