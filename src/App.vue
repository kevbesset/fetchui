<script setup lang="ts">
import Accordion from '@/ui/accordions/Accordion.vue'
import AccordionGroup from '@/ui/accordions/AccordionGroup.vue'
import Alert from '@/ui/Alert.vue'
import Badge from '@/ui/Badge.vue'
import Button from '@/ui/buttons/Button.vue'
import Icon from '@/ui/Icon.vue'
import type { ToastType } from '@/ui/toasts/toast.store'
import ToastManager from '@/ui/toasts/ToastManager.vue'
import { useToast } from '@/ui/toasts/useToast'

const toast = useToast()

function addToast(type: ToastType) {
  toast[type]('This is a test toast', {
    description: 'This is a test toast description',
  })
}
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
    <h2>Badges</h2>
    <div class="list">
      <Badge>Badge</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="important">Important</Badge>
      <Badge>
        <Icon name="add-line" />
        With icon
      </Badge>
      <Badge>8</Badge>
      <Badge variant="important">99</Badge>
      <Badge variant="secondary">20+</Badge>
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
    <h2>Toasts</h2>
    <ToastManager />
    <div class="list">
      <Button @click="addToast('default')">Send Toast</Button>
      <Button @click="addToast('success')">Send Success Toast</Button>
      <Button @click="addToast('error')">Send Error Toast</Button>
      <Button @click="addToast('warning')">Send Warning Toast</Button>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/main';
@use '@/styles/placeholders/card';

.demo {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  max-width: 40rem;
  margin-block: var(--spacingBlock);
  margin-inline: auto;
  padding-inline: var(--containerInline);
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  &--col {
    flex-direction: column;
  }
}
</style>
