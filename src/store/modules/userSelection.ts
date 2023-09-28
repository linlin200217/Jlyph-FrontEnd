import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userSelection = defineStore('userSelection', () => {
  const glyphType = ref('')
  const styleType = ref('')

  return { glyphType, styleType }
})
