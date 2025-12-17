<script setup lang="ts">
import Button from '@/ui/buttons/Button.vue'
</script>

<template>
  <div class="demo">
    <h2>Buttons <Button icon-only>+</Button></h2>
    <div class="list">
      <Button>Button</Button>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="discrete">Button</Button>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/main';

.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  padding-inline: var(--spacingInline);
  height: 100dvh;
}

.list {
  display: flex;
  gap: var(--gap);
}
</style>
