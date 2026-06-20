import { computed } from 'vue'

export type AlertVariant = 'default' | 'success' | 'warning' | 'error'

export interface AlertProps {
  variant?: AlertVariant
  icon?: string
  iconCollection?: string
  closable?: boolean
}

export function useAlert(props: AlertProps) {
  const classList = computed(() => {
    const classes: (string | Record<string, boolean>)[] = ['alert']

    if (props.variant) {
      classes.push(`alert--${props.variant}`)
    }

    classes.push({ 'alert--closable': !!props.closable })

    return classes
  })

  const defaultIcon = computed(() => {
    switch (props.variant) {
      case 'success':
        return 'check-circle-line'
      case 'warning':
        return 'alert-line'
      case 'error':
        return 'forbid-circle-line'
      default:
        return 'information-line'
    }
  })

  return {
    classList,
    defaultIcon,
  }
}
