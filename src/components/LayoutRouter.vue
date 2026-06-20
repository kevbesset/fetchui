<script setup lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const LayoutComponent = computed(() => route.meta.layout || DefaultLayout)
</script>

<template>
  <Component :is="LayoutComponent">
    <RouterView />
  </Component>
</template>
