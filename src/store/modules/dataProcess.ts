import { defineStore, storeToRefs } from 'pinia'
import { ref, watch, computed } from 'vue'
import { userSelection } from './userSelection.ts'

export const dataProcess = defineStore('dataProcess', () => {
  const selection = userSelection()
  const { glyphType } = storeToRefs(selection)

  const dataTitle = ref('')
  const categorical = ref({})
  const numerical = ref({})
  const wordcloud = ref({})
  const showLoading = ref(false)

  const cat_key = ref([])
  const num_key = ref([])
  const word_data = ref([])

  const categorical_result = ref([])
  const numerical_result = ref([])

  const modi_cat_result = ref([])
  const modi_num_result = ref([])
  const latitude_column = ref('')
  const longitude_column = ref('')

  const process_result = ref('')
  const result_image_id = ref('')

  const cat_watch = () => {
    for (const key in categorical.value) {
      cat_key.value.push(key)
    }
  }

  const num_watch = () => {
    for (const key in numerical.value) {
      if (!key.startsWith('Unnamed')) {
        num_key.value.push(key)
      }
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

  watch(glyphType, () => {})

  function isNotEmpty(value) {
    return value != null && value.length != 0
  }

  const categorical1 = computed(() => {
    const obj_arr = []
    categorical_result.value.forEach((element) => {
      if (isNotEmpty(element)) {
        let column_value = element
        const index = categorical_result.value.indexOf(element)
        const column_name = cat_key.value[index]

        if (element.endsWith('primary')) {
          column_value = column_value.split(' ')[0]
        }

        if (!element.endsWith('secondary')) {
          const obj = {
            column: column_name,
            value: column_value,
          }
          obj_arr.push(obj)
        }
      }
    })
    return obj_arr
  })

  const categorical2 = computed(() => {
    const obj_arr = []
    categorical_result.value.forEach((element) => {
      if (isNotEmpty(element)) {
        let column_value = element
        const index = categorical_result.value.indexOf(element)
        const column_name = cat_key.value[index]

        if (element.endsWith('secondary')) {
          column_value = column_value.split(' ')[0]
          const obj = {
            column: column_name,
            value: column_value,
          }
          obj_arr.push(obj)
        }
      }
    })
    return obj_arr
  })

  Array.prototype.move = function (from: number, to: number) {
    this.splice(to, 0, this.splice(from, 1)[0])
  }

  const numerical1 = computed(() => {
    const obj_arr = []
    numerical_result.value.forEach((element) => {
      // value: number
      if (isNotEmpty(element)) {
        let column_name = element
        const index = numerical_result.value.indexOf(element)
        const column_value = num_key.value[index]

        if (element.endsWith('primary')) {
          column_name = column_value.split(' ')[0] + '1'
        }
        if (element.endsWith('secondary')) {
          column_name = column_value.split(' ')[0]
        }

        const obj = {
          column: column_name,
          value: column_value,
        }
        obj_arr.push(obj)
      }
    })

    // move number to front
    const number_index = obj_arr.findIndex(function (item) {
      return item.column === 'number'
    })
    obj_arr.move(number_index, 0)

    if (glyphType.value === 'whole') {
      // move size to front
      const size_index = obj_arr.findIndex(function (item) {
        return item.column === 'size'
      })
      obj_arr.move(size_index, 0)
    }

    if (glyphType.value === 'combination') {
      // move number1 to front
      const number1_index = obj_arr.findIndex(function (item) {
        return item.column === 'number1'
      })
      obj_arr.move(number1_index, 0)
    }

    return obj_arr
  })

  function $reset() {
    categorical_result.value = []
    numerical_result.value = []
    modi_cat_result.value = []
    modi_num_result.value = []
  }

  return {
    dataTitle,
    categorical,
    numerical,
    wordcloud,
    showLoading,
    cat_key,
    num_key,
    word_data,
    numerical_result,
    categorical_result,
    categorical1,
    categorical2,
    numerical1,
    modi_cat_result,
    modi_num_result,
    process_result,
    result_image_id,
    latitude_column,
    longitude_column,
    $reset,
  }
})
