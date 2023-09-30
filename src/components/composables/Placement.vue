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
            <div class="flex flex-row flex-nowrap m-0 border border-black" v-for="(item, index) in cat_key">
                <div class="w-1/2">
                    <p class="text-left text-sm pl-2">{{ item }}</p>
                </div>
                <div class="w-1/2">
                    <el-select v-model="modi_cat_result[index]" class="m-0 p-0" placeholder="Select" size="small" clearable>
                        <el-option v-for="option in dropdown" :key="option.value" :label="option.label"
                            :value="option.value" :disabled="option.selected" />
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
                    <el-select v-model="modi_num_result[index]" class="m-0 p-0" placeholder="Select" size="small" clearable>
                        <el-option v-for="option in dropdown" :key="option.value" :label="option.label"
                            :value="option.value" :disabled="option.selected" />
                    </el-select>
                </div>
            </div>
        </div>

    </div>
    <div v-show="drawerEnable()" class="flex flex-row flex-nowrap items-center m-0">
        <div class="ml-2 text-sm">
            <el-radio-group v-model="placement_drawer" class="ml-4">
                <el-radio label="width" size="large">width</el-radio>
                <el-radio label="height" size="large">height</el-radio>
            </el-radio-group>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';

import Panel from "./Panel.vue"
import Header from './Header.vue';
import { userSelection } from '@/store/modules/userSelection.ts'
import { dataProcess } from '@/store/modules/dataProcess.ts'

const useSelection = userSelection();
const { placementType, placement_drawer } = storeToRefs(useSelection);
const useDataProcess = dataProcess();
const { cat_key, num_key, modi_cat_result, modi_num_result, latitude_column, longitude_column } = storeToRefs(useDataProcess);



let selectionEnable = ref(false)
let drawerEnable = () => {
    if (useSelection.glyphType === "whole" && useSelection.placementType === "grid") {
        return true
    } else {
        return false
    }
}
const buttons = [
    { text: 'grid' },
    { text: 'data' },
    { text: 'geo' },
]

watch(placementType, (newValue, _) => {
    if (newValue === 'grid') {
        selectionEnable.value = false
    }
    if (newValue === 'data' || newValue === 'geo') {
        selectionEnable.value = true
    }
})

let dropdown = ref<any>([
    { value: 'latitude', label: 'latitude', selected: false },
    { value: 'longitude', label: 'longitude', selected: false }
])

function isEmpty(value) {
    return (value == null || value.length === 0);
}

function isNotEmpty(value) {
    return (value != null && value.length != 0);
}

watch(() => [...modi_cat_result.value], (newArray, preArray) => {
    for (let i = 0; i < newArray.length; i++) {
        let element = newArray[i];
        let preElement = preArray[i];

        if (element === "latitude" && isEmpty(preElement)) {
            useDataProcess.latitude_column = useDataProcess.cat_key[i]
        }
        if ( isEmpty(element) && preElement === "latitude") {
            useDataProcess.latitude_column = ''
        }
        if (element === "longitude" && isEmpty(preElement)) {
            useDataProcess.longitude_column = useDataProcess.cat_key[i]
        }
        if ( isEmpty(element) && preElement === "longitude") {
            useDataProcess.longitude_column = ''
        }


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
        if (isNotEmpty(element) && isNotEmpty(preElement) && element != preElement) {
            dropdown.value.forEach((item) => {
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

watch(() => [...modi_num_result.value], (newArray, preArray) => {
    for (let i = 0; i < newArray.length; i++) {
        let element = newArray[i];
        let preElement = preArray[i];

        if (element === "latitude" && isEmpty(preElement)) {
            useDataProcess.latitude_column = useDataProcess.num_key[i]
        }
        if ( isEmpty(element) && preElement === "latitude") {
            useDataProcess.latitude_column = ''
        }
        if (element === "longitude" && isEmpty(preElement)) {
            useDataProcess.longitude_column = useDataProcess.num_key[i]
        }
        if ( isEmpty(element) && preElement === "longitude") {
            useDataProcess.longitude_column = ''
        }

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
    }
})

</script>

<style scoped></style>