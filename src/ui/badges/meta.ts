import type { RegistryEntry } from '@/registry/registry.types'

export const badge: RegistryEntry = {
  name: 'badge',
  files: ['ui/badges/Badge.vue'],
  componentDeps: [],
  styleDeps: ['typography', 'shadow'],
  tokenDeps: ['color', 'spacing', 'radius'],
  npmDeps: [],
  framework: 'vue',
}
