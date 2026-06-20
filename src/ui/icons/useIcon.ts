import { computed, toValue } from 'vue'

const DEFAULT_COLLECTION = 'mingcute'
const FILLABLE_COLLECTION: string[] = ['mingcute', 'mage']

export interface IconPropsType {
  collection?: string
  name: string
  fill?: boolean
}

export function useIcon(props: IconPropsType) {
  const collection = computed(() => props.collection || DEFAULT_COLLECTION)
  const isFillableCollection = computed(() => FILLABLE_COLLECTION.includes(collection.value))
  const hasFillableAttribute = computed(
    () =>
      typeof props.name === 'string' &&
      (props.name.includes('-fill') || props.name.includes('-line')),
  )

  const icon = computed(() => {
    let name = props.name as string

    if (isFillableCollection.value && !hasFillableAttribute.value) {
      name += `-${props.fill ? 'fill' : 'line'}`
    }

    return `${collection.value}:${name}`
  })

  return toValue(icon)
}
