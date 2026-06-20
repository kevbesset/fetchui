import type { RegistryEntry } from '@/registry/registry.types'

export const button: RegistryEntry = {
  name: 'button',
  files: ['ui/buttons/Button.vue', 'ui/buttons/useButton.ts'],
  componentDeps: [],
  styleDeps: ['shadow', 'typography'],
  tokenDeps: ['color', 'spacing', 'radius', 'motion'],
  npmDeps: [],
  framework: 'vue',
}
