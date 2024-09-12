<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white flex flex-col border border-gray-20">
      <div class="flex flex-col gap-4 p-4">
        <div class="flex justify-between">
          <span class="block bg-gray-20 w-12 h-12"></span>
          <div class="w-6 h-6 flex items-center justify-center cursor-pointer" @click="closeModal">
            <img src="@assets/close.svg" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <p v-if="label && label.length > 0" class="text-sm md:text-base text-gray-60 font-medium">
            {{ label }}
          </p>
          <h3 class="text-xl md:text-3xl font-bold">{{ title }}</h3>
        </div>
      </div>
      <div class="flex items-center justify-between gap-4 p-4">
        <ButtonComponent class="w-1/2" variant="outline" @click="closeModal"
          >Cancelar</ButtonComponent
        >
        <ButtonComponent class="w-1/2" @click="confirmAction">Confirmar</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@components/ButtonComponent.vue'

defineProps({
  title: {
    type: String,
    default: 'Modal Title'
  },
  label: {
    type: String,
    default: ''
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'confirm'])

const closeModal = () => {
  emit('close')
}

const confirmAction = () => {
  emit('confirm')
}
</script>
