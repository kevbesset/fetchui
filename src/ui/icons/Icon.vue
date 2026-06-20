<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { useIcon, type IconPropsType } from './useIcon'

const props = defineProps<IconPropsType>()
const icon = useIcon(props)
</script>

<template>
  <IconifyIcon :icon aria-hidden="true" class="icon" />
</template>

<style scoped lang="scss">
.icon {
  display: inline;
  max-width: none;
  vertical-align: middle;
  font-size: 1.25em;
}
</style>
