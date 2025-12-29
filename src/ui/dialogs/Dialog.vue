<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, useSlots, watch } from 'vue'
import Icon from '@/ui/Icon.vue'
import Button from '@/ui/buttons/Button.vue'

const props = defineProps<{
  persistent?: boolean
}>()
const dialogOpen = defineModel<boolean>()
const dialogRef = ref<HTMLDialogElement>()

const slots = useSlots()

function handleDialogStateChange() {
  if (dialogOpen.value) {
    nextTick(() => {
      dialogRef.value?.showModal()
      bindEvents()
    })
  } else {
    // Triggers accessibility default behaviour from dialog (like coming back to the trigger focus)
    dialogRef.value?.close()
  }
}

function onBackdropClick(e: Event) {
  if (!props.persistent && e.target === dialogRef.value) {
    dialogOpen.value = false
  }
}

// Bind events from default dialog behaviour to Vue ref
function bindEvents() {
  dialogRef.value?.addEventListener('close', (e) => {
    e.preventDefault()
    dialogOpen.value = false
  })

  dialogRef.value?.addEventListener('cancel', (e) => {
    e.preventDefault()
    if (!props.persistent) {
      dialogOpen.value = false
    }
  })
}

watch(dialogOpen, () => {
  handleDialogStateChange()
})

onMounted(() => {
  handleDialogStateChange()
})

onUnmounted(() => {
  dialogRef.value?.removeEventListener('close', () => {
    dialogOpen.value = false
  })
  dialogRef.value?.removeEventListener('cancel', () => {
    dialogOpen.value = false
  })
})
</script>

<template>
  <Teleport to="body">
    <dialog v-if="dialogOpen" ref="dialogRef" class="dialog" @click="onBackdropClick">
      <div class="dialog__body">
        <div class="dialog__header">
          <div v-if="slots.title" class="dialog__title">
            <slot name="title" />
          </div>
          <Button
            v-if="!persistent"
            icon-only
            aria-label="Close dialog"
            variant="secondary"
            @click="dialogOpen = false"
            class="dialog__close"
          >
            <Icon name="close-line" />
          </Button>
        </div>
        <div v-if="slots.default" class="dialog__content">
          <slot />
        </div>
        <div v-if="slots.footer" class="dialog__footer">
          <slot name="footer" />
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped lang="scss">
@use '@/styles/placeholders/card';

.dialog {
  border: none;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  backdrop-filter: blur(0.25em);
  background-color: color-mix(in oklch, var(--textColor), transparent 50%);

  &::backdrop {
    display: none;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--gap);
  }

  &__title {
    font-size: 1.25em;
    font-weight: 500;
    flex: 1;
  }

  &__body {
    @extend %card;

    position: relative;
    width: 100%;
    max-width: 26.5em;
    max-height: 80dvh;
    overflow: auto;
  }

  &__close {
    position: sticky;
    top: 0;
    flex-shrink: 0;
  }

  &__footer {
    display: flex;
    gap: var(--gap);
    justify-content: flex-end;
  }
}
</style>
