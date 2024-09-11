<template>
  <button
    :type="type"
    :class="[
      'w-fit-content text-white font-medium',
      colorClasses,
      variantClasses,
      sizeClasses,
      { '!bg-gray-30 !border-gray-30 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String,
    default: 'filled'
  },
  size: {
    type: String,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click'])

const onClick = (event) => {
  if (!props.disabled) {
    emits('click', event)
  }
}

const colorClasses = computed(() => {
  switch (props.color) {
    case 'alert':
      return 'bg-alert'
    default:
      return 'bg-primary-60'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'bg-transparent border border-primary-30'
    default:
      return 'bg-primary-60 border border-primary-60'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm px-6 py-3'
    case 'large':
      return 'text-lg px-8 py-5'
    default:
      return 'text-base px-7 py-4'
  }
})
</script>
