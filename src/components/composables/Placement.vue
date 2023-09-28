<template>
    <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="D2"></Panel>
    <Header text="Placement"></Header>
    <div class="flex justify-between mb-2 flex-wrap">
        <el-radio-group v-model="placementType" class="m-auto items-center">
            <el-radio class="text-xl" v-for="item in buttons" :label="item.text" size="large" border>{{ item.text
            }}</el-radio>
        </el-radio-group>
    </div>

    <div v-show="selectionEnable" class="flex flex-row flex-nowrap m-0">

        <div class="flex flex-col flex-nowrap m-0 w-1/2">
            <p class="ml-2 text-left text-sm">Categorical</p>
            <div class="flex flex-row flex-nowrap m-0 border border-black" v-for="(item, index) in categorical_column">
                <div class="w-1/2">
                    <p class="text-left text-sm pl-2">{{ item }}</p>
                </div>
                <div class="w-1/2">
                    <el-select v-model="categorical_result[index]" class="m-0 p-0" placeholder="Select" size="small"
                        clearable>
                        <el-option v-for="option in dropdown" :key="option.value" :label="option.label"
                            :value="option.value" :disabled="option.selected" />
                    </el-select>
                </div>
            </div>
        </div>

        <div class="flex flex-col flex-nowrap m-0 w-1/2">
            <p class="ml-2 text-left text-sm">Numerical</p>
            <div class="flex flex-row flex-nowrap m-0 border border-black" v-for="(item, index) in numerical_column">
                <div class="w-1/2">
                    <p class="text-left text-sm pl-2">{{ item }}</p>
                </div>
                <div class="w-1/2">
                    <el-select v-model="numerical_result[index]" class="m-0 p-0" placeholder="Select" size="small"
                        clearable>
                        <el-option v-for="option in dropdown" :key="option.value" :label="option.label"
                            :value="option.value" :disabled="option.selected" />
                    </el-select>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import Panel from "./Panel.vue"
import Header from './Header.vue';
import { userSelection } from '@/store/modules/userSelection.ts'
import store from 'src/store';
import { storeToRefs } from 'pinia';

let userSelec = userSelection();
// let style_type = ref('')
let placementType = storeToRefs(userSelec).placementType;
let selectionEnable = ref(false)
const buttons = [
    { text: 'grid' },
    { text: 'data' },
    { text: 'geo' },
]

watch(placementType, (newValue, _) => {
    // userSelec.styleType = newValue;
    if (newValue === 'grid') {
        selectionEnable.value = false
    }
    if (newValue === 'data' || newValue === 'geo') {
        selectionEnable.value = true
    }
    console.log(userSelec.placementType);
})

let categorical_result = ref([])
let numerical_result = ref([])

let dropdown = ref<any>([
    { value: 'x-axis', label: 'x-axis', selected: false },
    { value: 'y-axis', label: 'y-axis', selected: false }
])
const categorical_column = ["weather", "Day_night"];
const numerical_column = ["Severity", "year", "lat", "lon", "Temperature", "Pressure", "Visibility", "WindSpeed"];

function isEmpty(value) {
    return (value == null || value.length === 0);
}

function isNotEmpty(value) {
    return (value != null && value.length != 0);
}

watch(() => [...categorical_result.value], (newArray, preArray) => {
    newArray.forEach((element) => {
        let newIndex = newArray.indexOf(element);
        let preElement = preArray[newIndex];
        if (isNotEmpty(element) && isEmpty(preElement)) {
            dropdown.value.forEach((item) => {
                if (item.value === element) {
                    item.selected = true
                }
            })
        }
        if (isEmpty(element) && isNotEmpty(preElement)) {
            dropdown.value.forEach((item) => {
                if (item.value === preElement) {
                    item.selected = false
                }
            })
        }
        if (isNotEmpty(element) && isNotEmpty(preElement)) {
            dropdown.value.forEach((item) => {
                if (item.value === preElement) {
                    item.selected = false
                }
                if (item.value === element) {
                    item.selected = true
                }
            })
        }
    })
})

watch(() => [...numerical_result.value], (newArray, preArray) => {
    newArray.forEach((element) => {
        let newIndex = newArray.indexOf(element);
        let preElement = preArray[newIndex];
        if (isNotEmpty(element) && isEmpty(preElement)) {
            dropdown.value.forEach((item: any) => {
                if (item.value === element) {
                    item.selected = true
                }
            })
        }
        if (isEmpty(element) && isNotEmpty(preElement)) {
            dropdown.value.forEach((item: any) => {
                if (item.value === preElement) {
                    item.selected = false
                }
            })
        }
        if (isNotEmpty(element) && isNotEmpty(preElement)) {
            dropdown.value.forEach((item: any) => {
                if (item.value === preElement) {
                    item.selected = false
                }
                if (item.value === element) {
                    item.selected = true
                }
            })
        }
    })
})

</script>

<style scoped></style>