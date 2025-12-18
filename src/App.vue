<script setup lang="ts">
import Accordion from '@/ui/accordions/Accordion.vue'
import AccordionGroup from '@/ui/accordions/AccordionGroup.vue'
import Alert from '@/ui/Alert.vue'
import Button from '@/ui/buttons/Button.vue'
import Icon from '@/ui/Icon.vue'
</script>

<template>
  <div class="demo">
    <section>
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
    </section>
    <section>
      <h2>Alerts</h2>
      <div class="list list--col">
        <Alert>
          <template #title>This Alert has a title and an icon. No description.</template>
        </Alert>
        <Alert variant="success">
          <template #title>Success! Your changes have been saved</template>
          <template #description>This is an alert with icon, title, and description</template>
        </Alert>
        <Alert variant="warning">
          <template #title>This Alert.</template>
          <template #description>This is an alert with icon, title, and description</template>
        </Alert>
        <Alert variant="error">
          <template #title>Unable to process your payment.</template>
          <template #description>
            Please verify your billing information and try again.
            <ul>
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </template>
        </Alert>
      </div>
    </section>
    <section>
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
    </section>
  </div>
</template>

<style lang="scss">
@use '@/styles/main';
@use '@/styles/placeholders/card';

.demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--gap);
  row-gap: var(--gap);
  padding: var(--spacingBlock);
}

section {
  @extend %card;
}

.list {
  display: flex;
  gap: var(--gap);

  &--col {
    flex-direction: column;
  }
}
</style>
