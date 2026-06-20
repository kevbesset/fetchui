import type { RegistryEntry } from '@/registry/registry.types'

export const icon: RegistryEntry = {
  name: 'icon',
  files: ['ui/icons/Icon.vue', 'ui/icons/useIcon.ts'],
  componentDeps: [],
  styleDeps: [],
  tokenDeps: [],
  npmDeps: ['@iconify/vue'],
  framework: 'vue',
}
