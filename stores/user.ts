import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", () => {
  const historyStartPosition = ref<number>(0)

  function hydrate() {
    historyStartPosition.value = window.history.length
  }

  return {
    historyStartPosition,
    hydrate,
  }
})
