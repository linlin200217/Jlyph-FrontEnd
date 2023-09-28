import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const dataProcess = defineStore('dataProcess', () => {
  const dataTitle = ref('')
  const categorical = ref({})
  const numerical = ref({})
  const wordcloud = ref({})

  const cat_key = ref([])
  const num_key = ref([])
  const word_data = ref([])

  const cat_watch = () => {
    for (const key in categorical.value) {
      cat_key.value.push(key)
    }
  }

  const num_watch = () => {
    for (const key in numerical.value) {
      num_key.value.push(key)
    }
  }

  const word_watch = () => {
    for (const key in wordcloud.value) {
      const word = {
        name: key,
        value: Math.round(wordcloud.value[key]),
      }
      word_data.value.push(word)
    }
  }

  watch(categorical, () => {
    cat_watch()
  })
  watch(numerical, () => {
    num_watch()
  })
  watch(wordcloud, () => {
    word_watch()
  })
  return {
    dataTitle,
    categorical,
    numerical,
    wordcloud,
    cat_key,
    num_key,
    word_data,
  }
})
