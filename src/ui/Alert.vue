<script setup lang="ts">
import Icon from '@/ui/Icon.vue'
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'default' | 'success' | 'warning' | 'error'
  icon?: string
  iconCollection?: string
}>()

const defaultIcon = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'check-circle-line'
    case 'warning':
      return 'alert-line'
    case 'error':
      return 'forbid-circle-line'
    default:
      return 'information-line'
  }
})
</script>

<template>
  <div :class="['alert', `alert--${variant}`]">
    <Icon :name="icon || defaultIcon" :collection="iconCollection" class="alert__icon" />
    <div class="alert__title">
      <slot name="title" />
    </div>
    <div class="alert__description">
      <slot name="description" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/placeholders/card';
@use '@/styles/placeholders/typography';

.alert {
  $blockSelector: &;

  @extend %card;

  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1rem 1fr;
  row-gap: calc(var(--gap) / 2);
  column-gap: var(--gap);
  --colorIcon: inherit;

  &--error {
    border-color: color-mix(in oklch, var(--error), var(--backgroundColor) 80%);
    background-color: color-mix(in oklch, var(--error), var(--backgroundColor) 95%);
    --colorIcon: var(--error);
  }

  &--success {
    border-color: color-mix(in oklch, var(--success), var(--backgroundColor) 80%);
    background-color: color-mix(in oklch, var(--success), var(--backgroundColor) 95%);
    --colorIcon: var(--success);
  }

  &--warning {
    border-color: color-mix(in oklch, var(--warning), var(--backgroundColor) 80%);
    background-color: color-mix(in oklch, var(--warning), var(--backgroundColor) 95%);
    --colorIcon: var(--warning);
  }

  &__icon {
    color: var(--colorIcon);
  }

  &__title {
    font-weight: 500;
  }

  &__description {
    @extend %muted;
    font-size: 0.875em;
    grid-column-start: 2;
  }
}
</style>
