<script setup lang="ts"></script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100dvh;
}
</style>
