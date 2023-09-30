import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userSelection = defineStore('userSelection', () => {
  const glyphType = ref('')
  const generationPromptInput1 = ref(null)
  const generationPromptInput2 = ref(null)
  const generationPrimaryGuide1 = ref(null)
  const generationPrimaryGuide2 = ref(null)
  const styleType = ref(0)
  const styleID = ref(0)
  const spaceSize = ref(null)
  const placementType = ref('')
  const placement_drawer = ref('')
  const modificationBackgroundMode = ref('')
  const modificationBackgroundColor = ref('')
  const modificationDrawLines = ref('')
  const modificationStrokeColor = ref('')
  const modificationDashed = ref('')
  const modificationThickness = ref('')
  const data_canvas_color = ref('')
  const data_text_size = ref(0)
  const data_text_color = ref('')
  const data_grid_color = ref('')
  const data_show_grid = ref('')
  const geo_fill_color = ref('')
  const geo_continent_color = ref('')
  const geo_countries_color = ref('')
  const geo_linestyle = ref('')
  const geo_coastlines = ref('')
  const geo_lake_color = ref('')
  const pre_generated_image_id = ref('')
  const generated_image_id = ref('')

  function $reset() {
    glyphType.value = ''
    generationPromptInput1.value = null
    generationPromptInput2.value = null
    generationPrimaryGuide1.value = null
    generationPrimaryGuide2.value = null
    styleType.value = 0
    styleID.value = 0
    spaceSize.value = null
    placementType.value = ''
    placement_drawer.value = ''
    modificationBackgroundMode.value = ''
    modificationBackgroundColor.value = ''
    modificationDrawLines.value = ''
    modificationStrokeColor.value = ''
    modificationDashed.value = ''
    modificationThickness.value = ''
    data_canvas_color.value = ''
    data_text_size.value = 0
    data_text_color.value = ''
    data_grid_color.value = ''
    data_show_grid.value = ''
    geo_fill_color.value = ''
    geo_continent_color.value = ''
    geo_countries_color.value = ''
    geo_linestyle.value = ''
    geo_coastlines.value = ''
    geo_lake_color.value = ''
    pre_generated_image_id.value = ''
    generated_image_id.value = ''
  }

  return {
    glyphType,
    generationPromptInput1,
    generationPromptInput2,
    generationPrimaryGuide1,
    generationPrimaryGuide2,
    styleType,
    styleID,
    spaceSize,
    placementType,
    placement_drawer,
    modificationBackgroundMode,
    modificationBackgroundColor,
    modificationDrawLines,
    modificationStrokeColor,
    modificationDashed,
    modificationThickness,
    data_canvas_color,
    data_text_size,
    data_text_color,
    data_grid_color,
    data_show_grid,
    geo_fill_color,
    geo_continent_color,
    geo_countries_color,
    geo_linestyle,
    geo_coastlines,
    geo_lake_color,
    pre_generated_image_id,
    generated_image_id,
    $reset,
  }
})
