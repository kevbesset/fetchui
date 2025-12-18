<script setup lang="ts">
import Toast from '@/ui/toasts/Toast.vue'
import { useToastStore } from '@/ui/toasts/toast.store'
import { ref, watch } from 'vue'

const TIMEOUT_DURATION = 7000

const toastStore = useToastStore()
const currentToastId = ref<string>()
const timeout = ref<ReturnType<typeof setTimeout>>()

function removeToast(id?: string) {
  if (id) {
    toastStore.removeToast(id)
    updateCurrentToastId()
  }
}

function updateCurrentToastId() {
  clearTimeout(timeout.value)
  if (toastStore.toastList.length > 0) {
    currentToastId.value = toastStore.toastList[toastStore.toastList.length - 1]!.id
    timeout.value = setTimeout(() => {
      removeToast(currentToastId.value)
    }, TIMEOUT_DURATION)
  }
}

watch(
  () => toastStore.toastList?.length,
  () => {
    updateCurrentToastId()
  },
)
</script>

<template>
  <div class="toast-manager">
    <TransitionGroup name="fade-from-top">
      <Toast
        v-for="toast in toastStore.toastList"
        :key="toast.id"
        :toast="toast"
        :duration="currentToastId === toast.id ? TIMEOUT_DURATION : undefined"
        @close="removeToast(toast.id)"
      />
    </TransitionGroup>
  </div>
</template>
