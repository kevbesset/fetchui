import type { RegistryEntry } from '@/registry/registry.types'

export const tabs: RegistryEntry = {
  name: 'tabs',
  files: ['ui/tabs/Tabs.vue', 'ui/tabs/useTabs.ts'],
  componentDeps: [],
  styleDeps: ['card'],
  tokenDeps: ['color', 'spacing', 'radius', 'motion'],
  npmDeps: [],
  framework: 'vue',
}
