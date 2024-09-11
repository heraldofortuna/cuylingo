<template>
  <div class="flex flex-col">
    <label v-if="label" class="text-sm text-gray-90 mb-2">{{ label }}</label>
    <input
      v-bind="inputAttrs"
      class="bg-gray-10 text-gray-90 border-b border-gray-30 px-4 py-3 focus:outline-none"
      :class="{ '!border-2 !border-alert': hasError }"
      :type="type"
      :value="modelValue"
      @input="onInput"
    />
    <p v-if="hasError" class="text-xs md:text-sm text-alert mt-1">Hay un error</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const inputAttrs = computed(() => ({
  placeholder: props.placeholder,
  disabled: props.disabled
}))
</script>
