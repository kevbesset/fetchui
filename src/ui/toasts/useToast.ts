import { useToastStore, type Toast, type ToastType } from '@/ui/toasts/toast.store'

type PartialToast = Omit<Toast, 'id' | 'message' | 'type'>

export function useToast() {
  const toastStore = useToastStore()

  function createToast(message: string, type: ToastType, options: PartialToast) {
    const id = crypto.randomUUID()

    toastStore.addToast({ id, message, type, ...options })
  }

  const toast = {
    default: (message: string, options: Partial<PartialToast> = {}) => {
      options.icon = options?.icon ?? 'information-line'
      createToast(message, 'default', options as PartialToast)
    },
    success: (message: string, options: Partial<PartialToast> = {}) => {
      options.icon = options?.icon ?? 'check-line'
      createToast(message, 'success', options as PartialToast)
    },
    warning: (message: string, options: Partial<PartialToast> = {}) => {
      options.icon = options?.icon ?? 'alert-line'
      createToast(message, 'warning', options as PartialToast)
    },
    error: (message: string, options: Partial<PartialToast> = {}) => {
      options.icon = options?.icon ?? 'alert-octagon-line'
      createToast(message, 'error', options as PartialToast)
    },
  }

  return toast
}
