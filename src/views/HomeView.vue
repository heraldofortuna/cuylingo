<template>
  <section>
    <div class="flex flex-col gap-4">
      <h1 class="text-center text-2xl font-bold md:text-4xl">Practiquemos vocabulario</h1>
      <p class="text-left text-base md:text-lg">Traduce las siguientes palabras:</p>
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Translation, TranslationList } from '@types/data'
import InputComponent from '@components/InputComponent.vue'
import ButtonComponent from '@components/ButtonComponent.vue'

const words = ref<TranslationList>([
  { id: 0, request: 'Nombre', answer: 'Name', value: '', isValid: false },
  { id: 1, request: 'Casa', answer: 'House', value: '', isValid: false },
  { id: 2, request: 'Amigo', answer: 'Friend', value: '', isValid: false },
  { id: 3, request: 'Escuela', answer: 'School', value: '', isValid: false },
  { id: 4, request: 'Libro', answer: 'Book', value: '', isValid: false },
  { id: 5, request: 'Mesa', answer: 'Table', value: '', isValid: false },
  { id: 6, request: 'Ventana', answer: 'Window', value: '', isValid: false },
  { id: 7, request: 'Puerta', answer: 'Door', value: '', isValid: false },
  { id: 8, request: 'Reloj', answer: 'Clock', value: '', isValid: false },
  { id: 9, request: 'Coche', answer: 'Car', value: '', isValid: false },
  { id: 10, request: 'Perro', answer: 'Dog', value: '', isValid: false }
])

const isEnabledButton = ref<boolean>(false)
const isAfterSubmit = ref<boolean>(false)

const handleSendResults = () => {
  isAfterSubmit.value = true

  const allValid = words.value.every((word: Translation) => word.isValid === true)

  if (allValid) {
    alert('¡Completaste con éxito todo el vocabulario!')
  }
}

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
