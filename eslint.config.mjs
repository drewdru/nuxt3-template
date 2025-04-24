// @ts-check
import stylistic from "@stylistic/eslint-plugin"
import withNuxt from "./.nuxt/eslint.config.mjs"

// @ts-ignore
export default withNuxt({
  plugins: [stylistic],
  rules: {
    "@stylistic/brace-style": ["error", "1tbs"],
  },
})
