import type { RegistryEntry } from '@/registry/registry.types'

export const accordion: RegistryEntry = {
  name: 'accordion',
  files: ['ui/accordions/Accordion.vue', 'ui/accordions/AccordionGroup.vue'],
  componentDeps: ['icon'],
  styleDeps: [],
  tokenDeps: ['color', 'motion'],
  npmDeps: [],
  framework: 'vue',
}
