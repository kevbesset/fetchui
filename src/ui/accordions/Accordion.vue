<script setup lang="ts">
import Icon from '@/ui/icons/Icon.vue'
import { computed, inject, ref } from 'vue'

const props = defineProps<{
  name: string
}>()

const expandedFallback = ref<string>()
const [activeAccordionName, setActiveAccordionName] = inject('accordionGroup', [
  expandedFallback,
  (name?: string) => {
    expandedFallback.value = expandedFallback.value === name ? undefined : name
  },
])

const expanded = computed(() => activeAccordionName.value === props.name)

function toggleExpansion() {
  setActiveAccordionName(expanded.value ? undefined : props.name)
}
</script>

<template>
  <div class="accordion" :class="{ 'accordion--expanded': expanded }">
    <button
      :id="`accordion_trigger_${name}`"
      type="button"
      :aria-expanded="expanded ? 'true' : 'false'"
      :aria-controls="`accordion_content_${name}`"
      class="accordion__trigger"
      @click="toggleExpansion"
    >
      <slot name="trigger" />
      <Icon name="down-line" class="accordion__icon" />
    </button>
    <div
      :id="`accordion_content_${name}`"
      role="region"
      :aria-labelledby="`accordion_trigger_${name}`"
      :hidden="!expanded"
      class="accordion__content"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion {
  $blockSelector: &;
  width: 100%;
  border-bottom: 1px solid var(--borderColor);

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: initial;
    padding: 1em 0;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    cursor: pointer;
    font-weight: 500;
    border-radius: 0;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  &__icon {
    flex-shrink: 0;
    transition: transform var(--transition);
    text-decoration: none;
    color: var(--textMuted);

    #{$blockSelector}--expanded & {
      transform: rotate(180deg);
    }
  }

  &__content {
    display: block;
    font-size: 0.875em;
    height: 0;
    overflow: clip;
    visibility: hidden;
    transition: all var(--transition);
    interpolate-size: allow-keywords;

    #{$blockSelector}--expanded & {
      height: auto;
      padding-bottom: 1rem;
      visibility: visible;
    }
  }
}
</style>
