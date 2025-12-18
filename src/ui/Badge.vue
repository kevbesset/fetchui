<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'primary' | 'secondary' | 'important'
}>()
</script>

<template>
  <div :class="['badge', `badge--${variant}`]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/placeholders/typography';
@use '@/styles/placeholders/shadow';

.badge {
  @extend %small;
  @extend %boxShadow;

  // Badge variables
  --badgeBackgroundColor: var(--backgroundElevated);
  --badgeTextColor: var(--textColor);

  display: inline-flex;
  align-items: center;
  gap: calc(var(--spacingInline) / 4);
  border-radius: var(--borderRadiusRounded);
  padding-inline: calc(var(--spacingInline) / 2);
  padding-block: calc(var(--spacingBlock) / 4);
  font-weight: 500;
  background-color: var(--badgeBackgroundColor);
  color: var(--badgeTextColor);
  border: 1px solid var(--borderColor);

  &--primary {
    --badgeBackgroundColor: var(--textColor);
    --badgeTextColor: var(--backgroundColor);
  }

  &--secondary {
    --badgeBackgroundColor: color-mix(in oklch, var(--textColor), var(--backgroundColor) 95%);
    --badgeTextColor: var(--textMuted);
  }

  &--important {
    --badgeBackgroundColor: var(--error);
    --badgeTextColor: var(--textError);
  }
}
</style>
