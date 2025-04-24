export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) {
    return
  }
  if (from.name && to.name && from.name !== to.name) {
    try {
      await fetch(window.location.href, { cache: "no-store" })
      window.location.reload()
    } catch {
      window.location.reload()
    }
  }
})
