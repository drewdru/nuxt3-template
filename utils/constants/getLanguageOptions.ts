import type { SelectOption } from "naive-ui"
import { getFlagEmoji } from "../langToEmoji"

export const getLanguageOptions = (): SelectOption[] => {
  return [
    {
      label: () => `${getFlagEmoji("en")} English`,
      value: "en",
    },
    {
      label: () => `${getFlagEmoji("ru")} Русский`,
      value: "ru",
    },
  ]
}
