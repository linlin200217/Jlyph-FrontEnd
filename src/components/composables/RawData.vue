<template>
  <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="A2"></Panel>
  <Header text="Raw Data"></Header>
  <div class="flex flex-row flex-nowrap m-0">

    <div class="flex flex-col flex-nowrap m-0 w-1/2">
      <p class="ml-2 text-left text-sm">Categorical</p>
      <div class="flex flex-row flex-nowrap m-0 border border-black" v-for="(item, index) in cat_key">
        <div class="w-1/2">
          <p class="text-left text-sm pl-2">{{ item }}</p>
        </div>
        <div class="w-1/2">
          <el-select v-model="categorical_result[index]" class="m-0 p-0" placeholder="Select" size="small" clearable>
            <el-option v-for="option in catDropdown" :key="option.value" :label="option.label" :value="option.value"
              :disabled="option.selected" />
          </el-select>
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-nowrap m-0 w-1/2">
      <p class="ml-2 text-left text-sm">Numerical</p>
      <div class="flex flex-row flex-nowrap m-0 border border-black" v-for="(item, index) in num_key">
        <div class="w-1/2">
          <p class="text-left text-sm pl-2">{{ item }}</p>
        </div>
        <div class="w-1/2">
          <el-select v-model="numerical_result[index]" class="m-0 p-0" placeholder="Select" size="small" clearable>
            <el-option v-for="option in numDropdown" :key="option.value" :label="option.label" :value="option.value"
              :disabled="option.selected" />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import Panel from "./Panel.vue"
import Header from "./Header.vue"
import { storeToRefs } from 'pinia'
import { userSelection } from '@/store/modules/userSelection.ts'
import { dataProcess } from '@/store/modules/dataProcess.ts'

const useSelection = userSelection();
const { glyphType } = storeToRefs(useSelection);
const useDataProcess = dataProcess();
const { cat_key, num_key, categorical_result, numerical_result } = storeToRefs(useDataProcess);

let catDropdown = ref<any>([])
let numDropdown = ref<any>([])

function catSelector(target: String) {
  let option = [];
  switch (target) {
    case "partial": {
      option = [
        { value: 'color', label: 'color', selected: false },
        { value: 'texture', label: 'texture', selected: false }
      ];
      break;
    }
    case "whole": {
      option = [
        { value: 'color', label: 'color', selected: false },
        { value: 'texture', label: 'texture', selected: false },
        { value: 'shape', label: 'shape', selected: false }
      ];
      break;
    }
    case "combination": {
      option = [
        { value: 'color primary', label: 'color primary', selected: false },
        { value: 'color secondary', label: 'color secondary', selected: false },
        { value: 'texture primary', label: 'texture primary', selected: false },
        { value: 'texture secondary', label: 'texture secondary', selected: false },
        { value: 'shape', label: 'shape', selected: false }
      ];
      break;
    }
    default: {
      option = []
      break;
    }
  }
  option.forEach((element) => {
    element.selected = false;
  })
  catDropdown.value = option;
}

function numSelector(target: String) {
  let option = [];
  switch (target) {
    case "partial": {
      option = [
        { value: 'number', label: 'number', selected: false },
        { value: 'size', label: 'size', selected: false },
        { value: 'opacity', label: 'opacity', selected: false }
      ];
      break;
    }
    case "whole": {
      option = [
        { value: 'size', label: 'size', selected: false },
        { value: 'number', label: 'number', selected: false },
        { value: 'opacity', label: 'opacity', selected: false }
      ];
      break;
    }
    case "combination": {
      option = [
        { value: 'number primary', label: 'number primary', selected: false },
        { value: 'number secondary', label: 'number secondary', selected: false },
        { value: 'size', label: 'size', selected: false },
        { value: 'opacity', label: 'opacity', selected: false }
      ];
      break;
    }
    default: {
      option = []
      break;
    }
  }
  option.forEach((element) => {
    element.selected = false;
  })
  numDropdown.value = option;
}

function isEmpty(value) {
  return (value == null || value.length === 0);
}

function isNotEmpty(value) {
  return (value != null && value.length != 0);
}

watch(glyphType, (newType) => {
  catSelector(newType)
  numSelector(newType)
})

watch(() => [...categorical_result.value], (newArray, preArray) => {
  for (let i = 0; i < newArray.length; i++) {
    let element = newArray[i];
    let preElement = preArray[i];
    if (isNotEmpty(element) && isEmpty(preElement)) {
      catDropdown.value.forEach((item) => {
        if (item.value === element) {
          item.selected = true
        }
      })
    }
    if (isEmpty(element) && isNotEmpty(preElement)) {
      catDropdown.value.forEach((item) => {
        if (item.value === preElement) {
          item.selected = false
        }
      })
    }
    if (isNotEmpty(element) && isNotEmpty(preElement)) {
      catDropdown.value.forEach((item) => {
        if (item.value === preElement) {
          item.selected = false
        }
        if (item.value === element) {
          item.selected = true
        }
      })
    }
  }
})

watch(() => [...numerical_result.value], (newArray, preArray) => {
  for (let i = 0; i < newArray.length; i++) {
    let element = newArray[i];
    let preElement = preArray[i];
    if (isNotEmpty(element) && isEmpty(preElement)) {
      numDropdown.value.forEach((item) => {
        if (item.value === element) {
          item.selected = true
        }
      })
    }
    if (isEmpty(element) && isNotEmpty(preElement)) {
      numDropdown.value.forEach((item) => {
        if (item.value === preElement) {
          item.selected = false
        }
      })
    }
    if (isNotEmpty(element) && isNotEmpty(preElement)) {
      numDropdown.value.forEach((item) => {
        if (item.value === preElement) {
          item.selected = false
        }
        if (item.value === element) {
          item.selected = true
        }
      })
    }
  }
})

</script>

<style scoped></style>