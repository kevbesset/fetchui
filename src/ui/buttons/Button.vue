<script setup lang="ts">
import { useButton, type ButtonProps } from '@/ui/buttons/useButton'

const props = defineProps<ButtonProps>()

const { classList, component, type } = useButton(props)
</script>

<template>
  <component
    :is="component"
    :type
    :role="component !== 'button' ? 'button' : undefined"
    :class="classList"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use '@/styles/placeholders/shadow';
@use '@/styles/placeholders/typography';

.button {
  @extend %boxShadow;
  @extend %body;

  // Button variables
  --buttonBackgroundColor: var(--backgroundElevated);
  --buttonTextColor: var(--textColor);

  // Reset button styles
  border: none;
  appearance: button;
  font-weight: normal;
  min-width: fit-content;
  line-height: 1;
  font: inherit;

  // Custom styles
  font-size: 0.875em;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacingInline) / 2);
  background-color: var(--buttonBackgroundColor);
  color: var(--buttonTextColor);
  border-radius: var(--borderRadius);
  cursor: pointer;
  padding-block: calc(var(--spacingBlock) / 2);
  padding-inline: var(--spacingInline);
  letter-spacing: 0.01rem;
  text-align: center;
  transition: background-color var(--transition);
  border: 1px solid var(--borderColor);

  @media (hover: hover) {
    &:hover {
      background-color: color-mix(
        in oklch,
        var(--buttonTextColor),
        var(--buttonBackgroundColor) 98%
      );
    }
  }

  &:active {
    background-color: color-mix(in oklch, var(--buttonTextColor), var(--buttonBackgroundColor) 90%);
  }

  &--block {
    width: 100%;
  }

  &--rounded {
    border-radius: var(--borderRadiusRounded);
  }

  &--primary {
    --buttonBackgroundColor: var(--textColor);
    --buttonTextColor: var(--backgroundColor);
  }

  &--secondary {
    --buttonBackgroundColor: color-mix(in oklch, var(--textColor), var(--backgroundColor) 95%);
    --buttonTextColor: var(--textMuted);
  }

  &--discrete {
    border-color: transparent;
    box-shadow: none;
    --buttonBackgroundColor: transparent;
  }

  &--disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &--iconOnly {
    padding: 0;
    width: 2.175rem;
    height: 2.175rem;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
}
</style>
