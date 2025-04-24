export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) {
    return
  }
  const isNavigating = from.name && to.name && from.name !== to.name
  if (!isNavigating) return

  try {
    await fetch(window.location.href, { cache: "no-store" })
    window.location.reload()
  } catch {
    window.location.reload()
  }
})
