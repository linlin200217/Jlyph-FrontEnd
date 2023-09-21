import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userSelection = defineStore('userSelection', () => {
  const point = ref(1)
  
  return { point }
})
