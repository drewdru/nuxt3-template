<template>
  <CustomNuxtLink
    v-bind="props"
    class="link"
  >
    <slot />
  </CustomNuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({} as NuxtLinkProps)
const CustomNuxtLink = defineNuxtLink({
  componentName: "CustomNuxtLink",
})
</script>

<style lang="scss">
@use "./customNuxtLink" as *;
</style>
