import { useLangStore } from "@/stores/lang"

export default defineNuxtPlugin((nuxtApp) => {
  const { setLocale, locale } = nuxtApp.$i18n as never

  const langStore = useLangStore()
  langStore.hydrate(locale, setLocale)
})
