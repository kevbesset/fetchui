<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSwipe } from '@vueuse/core'
import type { Toast } from '@/ui/toasts/toast.store'
import Alert from '@/ui/alerts/Alert.vue'

defineProps<{
  toast: Toast
  duration?: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const el = useTemplateRef<HTMLDivElement>('el')
useSwipe(el, {
  onSwipeEnd: (e, direction) => {
    if (direction === 'up') {
      emit('close')
    }
  },
})
</script>

<template>
  <Alert
    :icon="toast.icon"
    :variant="toast.type"
    closable
    ref="el"
    class="toast"
    @close="emit('close')"
  >
    <template #title>
      {{ toast.message }}
    </template>
    <template #description>
      {{ toast.description }}
    </template>
  </Alert>
</template>

<style scoped lang="scss">
@use '@/styles/placeholders/shadow';

.toast {
  $blockSelector: &;

  position: fixed;
  top: var(--spacingBlock);
  left: var(--containerInline);
  right: var(--containerInline);
  max-width: min(calc(100% - var(--containerInline) * 2), var(--containerMaxWidth));
  margin-inline: auto;
  z-index: 1000;
  transition: all var(--transition);
  scale: 0.9;
  translate: 0 1em;
  overflow: hidden;
  box-shadow: none;

  &:nth-last-child(2) {
    @extend %boxShadow;
  }

  &:last-child {
    @extend %boxShadow;

    scale: 1;
    translate: 0 0;
  }
}
</style>
