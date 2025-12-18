import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ToastType = 'success' | 'error' | 'warning' | 'default'

export interface Toast {
  id: string
  description?: string
  type: ToastType
  icon: string
  message: string
  duration?: number
}

export const useToastStore = defineStore('toast', () => {
  const toastList = ref<Toast[]>([])

  function removeToast(id: string) {
    toastList.value = toastList.value.filter((t) => t.id !== id)
  }

  function addToast(toast: Toast) {
    if (toastList.value.find((t) => t.id === toast.id)) {
      return
    }

    toastList.value.push(toast)
  }

  return {
    toastList,
    addToast,
    removeToast,
  }
})
