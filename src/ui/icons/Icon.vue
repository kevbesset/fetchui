<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'

withDefaults(
  defineProps<{
    name: string
    collection?: string
  }>(),
  {
    collection: 'mingcute',
  },
)
</script>

<template>
  <IconifyIcon :icon="`${collection}:${name}`" aria-hidden="true" class="icon" />
</template>

<style scoped lang="scss">
.icon {
  vertical-align: middle;
}
</style>
