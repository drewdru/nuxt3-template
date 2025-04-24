import { defineStore } from "pinia"

export const useLangStore = defineStore("langStore", () => {
  const lang = ref<string | null>(null)
  function setLang(
    locale: string,
    setLocale: (locale: string) => Promise<void>,
  ) {
    lang.value = locale
    localStorage.setItem("lang", lang.value)
    setLocale(lang.value)
  }

  function hydrate(
    locale: Ref<string>,
    setLocale: (locale: string) => Promise<void>,
  ) {
    lang.value = localStorage.getItem("lang") ?? locale.value
    setLocale(lang.value)
  }

  return {
    lang,
    hydrate,
    setLang,
  }
})
