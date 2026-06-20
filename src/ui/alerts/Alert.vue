<script setup lang="ts">
import Button from '@/ui/buttons/Button.vue'
import Icon from '@/ui/icons/Icon.vue'
import { useAlert, type AlertProps } from '@/ui/alerts/useAlert'

const props = defineProps<AlertProps>()

const { classList, defaultIcon } = useAlert(props)
</script>

<template>
  <div :class="classList">
    <Icon :name="icon || defaultIcon" :collection="iconCollection" class="alert__icon" />
    <div class="alert__title">
      <slot name="title" />
    </div>
    <Button
      variant="discrete"
      icon-only
      v-if="closable"
      @click="$emit('close')"
      class="alert__close"
    >
      <Icon name="close-line" />
    </Button>
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

  position: relative;
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 1rem 1fr;
  row-gap: calc(var(--gap) / 2);
  column-gap: var(--gap);
  --colorIcon: inherit;

  &--closable {
    grid-template-columns: 1rem 1fr 2.175rem;
  }

  &--error {
    border-color: color-mix(in oklch, var(--errorColor), var(--backgroundElevated) 80%);
    background-color: color-mix(in oklch, var(--errorColor), var(--backgroundElevated) 95%);
    --colorIcon: var(--errorColor);
  }

  &--success {
    border-color: color-mix(in oklch, var(--successColor), var(--backgroundElevated) 80%);
    background-color: color-mix(in oklch, var(--successColor), var(--backgroundElevated) 95%);
    --colorIcon: var(--successColor);
  }

  &--warning {
    border-color: color-mix(in oklch, var(--warningColor), var(--backgroundElevated) 80%);
    background-color: color-mix(in oklch, var(--warningColor), var(--backgroundElevated) 95%);
    --colorIcon: var(--warningColor);
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

  &__close {
    position: absolute;
    top: 50%;
    right: var(--containerInline);
    translate: 0 -50%;
  }
}
</style>
