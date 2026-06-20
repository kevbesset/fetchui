import type { RegistryEntry } from '@/registry/registry.types'

export const alert: RegistryEntry = {
  name: 'alert',
  files: ['ui/alerts/Alert.vue', 'ui/alerts/useAlert.ts'],
  componentDeps: ['button', 'icon'],
  styleDeps: ['card', 'typography'],
  tokenDeps: ['color', 'spacing', 'radius'],
  npmDeps: [],
  framework: 'vue',
}
