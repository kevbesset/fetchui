import { computed, onMounted, ref, useSlots, type ModelRef } from 'vue'

export function useTabs(currentTab: ModelRef<string | undefined>) {
  const slots = useSlots()

  const tabs = computed(() => slots.default?.().map(({ props }) => props?.tab))
  const transitionName = ref('transition-next')

  const bodyComponent = computed(() =>
    slots.default?.().find(({ props }) => props?.tab === currentTab.value),
  )
  const currentTabIndex = computed(
    () => tabs.value?.findIndex((tab) => tab === currentTab.value) || 0,
  )

  function handleTabChange(nextTab: string) {
    const tabIndex = tabs.value?.findIndex((tab) => tab === nextTab) || 0
    transitionName.value = tabIndex < currentTabIndex.value ? 'transition-prev' : 'transition-next'
    currentTab.value = nextTab
  }

  onMounted(() => {
    if (tabs.value && (!currentTab.value || !tabs.value.includes(currentTab.value))) {
      currentTab.value = tabs.value[0]
    }
  })

  return {
    tabs,
    transitionName,
    bodyComponent,
    handleTabChange,
  }
}
