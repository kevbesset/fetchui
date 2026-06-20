import type { RegistryEntry } from '@/registry/registry.types'

export const dialog: RegistryEntry = {
  name: 'dialog',
  files: ['ui/dialogs/Dialog.vue'],
  componentDeps: ['button', 'icon'],
  styleDeps: ['card'],
  tokenDeps: ['color', 'spacing'],
  npmDeps: [],
  framework: 'vue',
}
