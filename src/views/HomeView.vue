<template>
  <section>
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-center text-2xl font-bold md:text-4xl">Vocabulary</h1>
      <BadgeComponent> Nivel {{ level + 1 }} </BadgeComponent>
    </div>
  </section>
  <section>
    <div class="flex flex-col items-center gap-4">
      <ul class="w-full flex flex-col gap-4">
        <li v-for="(word, index) in words" :key="word.id" class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <span class="font-medium">{{ index + 1 }}. </span>
            <p class="font-medium">{{ word.request.toLowerCase() }}</p>
            <p v-if="isAfterSubmit">
              <span v-if="word.isValid" class="text-success font-medium"> ¡Es correcto! </span>
              <span v-else class="text-alert font-medium"> ({{ word.answer.toLowerCase() }}) </span>
            </p>
          </div>
          <InputComponent
            v-model="word.value"
            placeholder="Ingrese su traducción"
            :has-error="!word.isValid && isAfterSubmit"
          />
        </li>
      </ul>
      <ButtonComponent class="mt-4" :disabled="!isEnabledButton" @click="handleSendResults"
        >Enviar</ButtonComponent
      >
    </div>
  </section>
  <ModalComponent
    :title="'¿Vamos al siguiente nivel?'"
    :label="'¡Felicidades!'"
    :isOpen="isModalOpen"
    @close="closeModal"
    @confirm="handleConfirmModal"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Translation, TranslationList } from '../types/data'
import InputComponent from '@components/InputComponent.vue'
import ButtonComponent from '@components/ButtonComponent.vue'
import BadgeComponent from '@components/BadgeComponent.vue'
import ModalComponent from '@components/ModalComponent.vue'
import { wordsGroup } from '@const/index'

const level = ref<number>(0)
const words = ref<TranslationList>(wordsGroup[level.value])
const isEnabledButton = ref<boolean>(false)
const isAfterSubmit = ref<boolean>(false)
const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleConfirmModal = () => {
  level.value += 1
  isAfterSubmit.value = false
  closeModal()

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSendResults = () => {
  isAfterSubmit.value = true

  const allValid = words.value.every((word: Translation) => word.isValid === true)

  if (allValid) {
    openModal()
  }
}

watch(level, (newLevel) => {
  words.value = wordsGroup[newLevel]
})

watch(
  words,
  (newWords) => {
    words.value.forEach((word: Translation) => {
      word.isValid = word.value.trim().toLowerCase() === word.answer.toLowerCase()
    })

    isEnabledButton.value = newWords.every((word) => word.value.trim() !== '')
  },
  { deep: true }
)
</script>
