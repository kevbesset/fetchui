<script setup lang="ts">
import { useTabs } from '@/ui/tabs/useTabs'

const currentTab = defineModel<string>()

const { tabs, bodyComponent, handleTabChange } = useTabs(currentTab)
</script>

<template>
  <div class="tabs">
    <div class="tabs__header">
      <div class="tabs__tracer"></div>
      <div class="tabs__list">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="tabs__item"
          :class="{
            'tabs__item--active': currentTab === tab,
          }"
          @click="handleTabChange(tab)"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    <div class="tabs__body">
      <div :key="currentTab" class="tabs__inner">
        <Component :is="bodyComponent" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/placeholders/card';

.tabs {
  width: 100%;
  anchor-name: --active-tab;

  &__header {
    background-color: color-mix(in oklch, var(--textColor), var(--backgroundElevated) 98%);
    border-radius: var(--borderRadius);

    padding: 0;
    position: relative;
    margin-bottom: calc(var(--spacingBlock) + var(--gap));
    padding: 0.25rem;
  }

  &__list {
    position: relative;
    display: flex;
  }

  &__item {
    flex: 1;
    background: none;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding-block: calc(var(--spacingBlock) / 2);
    padding-inline: var(--spacingInline);
    cursor: pointer;
    color: var(--textColor);

    &--active {
      pointer-events: none;
      color: var(--textColor);
      anchor-name: --active-tab;
    }
  }

  &__tracer {
    @extend %card;

    position: absolute;
    bottom: anchor(bottom);
    left: anchor(left);
    right: anchor(right);
    top: anchor(top);
    transition: all var(--transition);

    position-anchor: --active-tab;
  }

  &__body {
    overflow: hidden;
    width: 100%;
  }
}
</style>
