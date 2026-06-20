import { computed, useAttrs, watchEffect } from 'vue'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'discrete'

export interface ButtonProps {
  variant?: ButtonVariant
  iconOnly?: boolean
  block?: boolean
  rounded?: boolean
}

export function useButton(props: ButtonProps) {
  const attrs = useAttrs()

  const disabled = computed(() => typeof attrs.disabled !== 'undefined' && !!attrs.disabled)

  const component = computed(() => {
    if (disabled.value) {
      return 'button'
    }

    if (typeof attrs.href !== 'undefined') {
      return 'a'
    }

    return 'button'
  })

  const type = computed(() =>
    (attrs?.type ?? component.value === 'button') ? 'button' : undefined,
  )

  const classList = computed(() => {
    const classes: (string | Record<string, boolean>)[] = ['button']

    if (props.variant) {
      classes.push(`button--${props.variant}`)
    }

    classes.push({
      'button--block': !!props.block,
      'button--rounded': !!props.rounded,
      'button--iconOnly': !!props.iconOnly,
      'button--disabled': disabled.value,
    })

    return classes
  })

  function verifyA11Y() {
    if (props.iconOnly && !attrs['aria-label']) {
      console.warn('A11Y: Icon only button must have an aria-label')
    }
  }

  watchEffect(() => {
    verifyA11Y()
  })

  return {
    classList,
    disabled,
    component,
    type,
  }
}
