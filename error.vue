<i18n locale="en" lang="yaml">
404NotFound: 404 Not Found
WeCouldntFindPage: We couldn't find the page you were looking for.
GoToHomepage: Go to Homepage
500ServerError: 500 Server Error
ServerCantBeReached: Oops! Server can't be reached.
</i18n>

<i18n locale="ru" lang="yaml">
404NotFound: 404 Не найдено
WeCouldntFindPage: Мы не смогли найти нужную вам страницу.
GoToHomepage: Перейти на главную
500ServerError: 500 Ошибка сервера
ServerCantBeReached: Упс! Невозможно связаться с сервером.
</i18n>

<template>
  <naive-config>
    <NConfigProvider
      :theme="darkTheme"
      :theme-overrides="themeOverrides"
    >
      <NLoadingBarProvider>
        <NMessageProvider>
          <NNotificationProvider>
            <NDialogProvider>
              <NLayout>
                <div
                  v-if="error?.statusCode === 404"
                  class="error"
                >
                  <NResult status="404">
                    <template #default>
                      <div class="error-content">
                        <NH2>{{ t("404NotFound") }}</NH2>
                        <NP>{{ t("WeCouldntFindPage") }}</NP>
                      </div>
                    </template>
                    <template #icon>
                      <NImage
                        preview-disabled
                        src="/img/errors/404.png"
                      />
                    </template>
                    <template #footer>
                      <NButton
                        type="primary"
                        @click="goToHomePage()"
                      >
                        {{ t("GoToHomepage") }}
                      </NButton>
                    </template>
                  </NResult>
                </div>
                <div
                  v-else-if="error?.statusCode === 500"
                  class="error"
                >
                  <NResult status="500">
                    <template #default>
                      <div class="error-content">
                        <NH2>{{ t("500ServerError") }}</NH2>
                        <NP>{{ t("ServerCantBeReached") }}</NP>
                      </div>
                    </template>
                    <template #icon>
                      <NImage
                        preview-disabled
                        src="/img/errors/500.png"
                      />
                    </template>
                    <template #footer>
                      <NButton
                        type="primary"
                        @click="goToHomePage()"
                      >
                        {{ t("GoToHomepage") }}
                      </NButton>
                    </template>
                  </NResult>
                </div>
                <div
                  v-else
                  class="error"
                >
                  <NResult status="error">
                    <template #default>
                      <div class="error-content">
                        <NH2>{{ error?.statusCode }}</NH2>
                        <NP>{{ error?.statusMessage }}</NP>
                      </div>
                    </template>
                    <template #footer>
                      <NButton
                        type="primary"
                        @click="goToHomePage()"
                      >
                        {{ t("GoToHomepage") }}
                      </NButton>
                    </template>
                  </NResult>
                </div>
              </NLayout>
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
  type GlobalThemeOverrides,
  NResult,
  NButton,
  NP,
  NH2,
} from "naive-ui"
import type { NuxtError } from "#app"

const { t } = useI18n()

defineProps({
  error: Object as () => NuxtError,
})

const { colorModePreference } = useNaiveColorMode()
colorModePreference.set("dark")
const goToHomePage = async () => {
  clearError()
  await navigateTo("/", { external: true })
}

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#c1d37f",
    bodyColor: "#0f1718",
    primaryColorHover: "#06bcc1",
    primaryColorPressed: "#06bcc1",
    cardColor: "#1d252a",
    popoverColor: "#1d252a",
    textColor1: "#eee9dd",
    textColor2: "#eee9dd",
    textColor3: "rgba(238, 227, 221, 0.65)",
    fontSize: "1rem",
    iconColor: "#eee9dd",
    lineHeight: "1.5rem",
  },
  Carousel: {
    dotColor: "rgba(246, 235, 249, 0.2)",
    dotColorActive: "#06bcc1",
  },
  Button: {
    fontSizeMedium: "1rem",
    textColorPrimary: "#0f1718",
  },
  Card: {
    borderColor: "none",
  },
  Drawer: {
    color: "#1d252a",
    footerBorderTop: "none",
    headerBorderBottom: "none",
  },
}
</script>

<style lang="scss">
.error {
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  .error-content {
    text-align: center;
  }
}
</style>
