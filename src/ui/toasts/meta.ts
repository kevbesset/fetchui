import type { RegistryEntry } from '@/registry/registry.types'

export const toast: RegistryEntry = {
  name: 'toast',
  files: [
    'ui/toasts/Toast.vue',
    'ui/toasts/ToastManager.vue',
    'ui/toasts/toast.store.ts',
    'ui/toasts/useToast.ts',
  ],
  componentDeps: ['alert'],
  styleDeps: ['shadow'],
  tokenDeps: ['spacing', 'motion'],
  npmDeps: ['pinia', '@vueuse/core'],
  framework: 'vue',
}
