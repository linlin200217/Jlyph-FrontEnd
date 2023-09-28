import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userSelection = defineStore('userSelection', () => {
  const glyphType = ref('')
  const generationPromptInput1 = ref('')
  const generationPromptInput2 = ref('')
  const generationPrimaryGuide1 = ref('')
  const generationPrimaryGuide2 = ref('')
  const placementType = ref('')
  const modificationBackgroundMode = ref('')
  const modificationBackgroundColor = ref('')
  const modificationDrawLines = ref('')
  const modificationStrokeColor = ref('')
  const modificationDashed = ref('')
  const modificationThickness = ref('')


  return { glyphType, 
           generationPromptInput1, 
           generationPromptInput2, 
           generationPrimaryGuide1, 
           generationPrimaryGuide2, 
           placementType, 
           modificationBackgroundMode,
           modificationBackgroundColor,
           modificationDrawLines,
           modificationStrokeColor,
           modificationDashed,
           modificationThickness }
})
