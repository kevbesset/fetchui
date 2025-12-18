<script setup lang="ts">
import Accordion from '@/ui/accordions/Accordion.vue'
import AccordionGroup from '@/ui/accordions/AccordionGroup.vue'
import Button from '@/ui/buttons/Button.vue'
import Icon from '@/ui/icons/Icon.vue'
</script>

<template>
  <div class="demo">
    <h2>Accordions</h2>
    <div class="list">
      <AccordionGroup>
        <Accordion name="test1">
          <template #trigger> Accordion 1 </template>
          <template #content> Accordion 1 content </template>
        </Accordion>
        <Accordion name="test2">
          <template #trigger> Accordion 2 </template>
          <template #content> Accordion 2 content </template>
        </Accordion>
      </AccordionGroup>
    </div>
    <h2>Buttons</h2>
    <div class="list">
      <Button>Button</Button>
      <Button icon-only aria-label="Test">
        <Icon name="add-line" />
      </Button>
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
  justify-content: center;
  gap: var(--gap);
  padding-inline: var(--spacingInline);
  height: 100dvh;
  max-width: 600px;
  margin-inline: auto;
}

.list {
  display: flex;
  gap: var(--gap);
}
</style>
