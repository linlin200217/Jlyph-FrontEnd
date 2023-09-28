<template>
    <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="D3"></Panel>
    <Header text="Modification"></Header>
    <div class="flex flex-col flex-nowrap m-0 p-2">
        <p class="text-left text-sm">background mode</p>
        <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="background_mode" class="ml-4">
                <el-radio label="true" size="large">True</el-radio>
                <el-radio label="false" size="large">False</el-radio>
            </el-radio-group>
        </div>

        <p class="text-left text-sm">background color</p>
        <el-color-picker v-model="background_color" show-alpha :predefine="predefineColors" />

        <p class="text-left text-sm">draw lines</p>
        <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="draw_lines" class="ml-4">
                <el-radio label="true" size="large">True</el-radio>
                <el-radio label="false" size="large">False</el-radio>
            </el-radio-group>
        </div>

        <p class="text-left text-sm">stroke color</p>
        <el-color-picker v-model="stroke_color" show-alpha :predefine="predefineColors" />

        <p class="text-left text-sm">dashed</p>
        <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="dashed" class="ml-4">
                <el-radio label="solid" size="large">
                    <div class="w-10 flex-grow border-t-4 border-solid border-black"></div>
                </el-radio>
                <el-radio label="dashed" size="large">
                    <div class="w-10 flex-grow border-t-4 border-dashed border-black"></div>
                </el-radio>
                <el-radio label="dotted" size="large">
                    <div class="w-10 flex-grow border-t-4 border-dotted border-black"></div>
                </el-radio>
                <el-radio label="double" size="large">
                    <div class="w-10 flex-grow border-t-4 border-double border-black"></div>
                </el-radio>
            </el-radio-group>
        </div>

        <p class="text-left text-sm">border thickness</p>
        <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="thickness" class="ml-4">
                <el-radio label="0" size="large">
                    <div class="w-10 flex-grow border-t border-solid border-black"></div>
                </el-radio>
                <el-radio label="2" size="large">
                    <div class="w-10 flex-grow border-t-2 border-solid border-black"></div>
                </el-radio>
                <el-radio label="4" size="large">
                    <div class="w-10 flex-grow border-t-4 border-solid border-black"></div>
                </el-radio>
                <el-radio label="8" size="large">
                    <div class="w-10 flex-grow border-t-8 border-solid border-black"></div>
                </el-radio>
            </el-radio-group>
        </div>
        <div class="ml-auto">
            <el-button type="primary" native-type="submit" round>Done</el-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import Panel from "./Panel.vue"
import Header from './Header.vue';
import { storeToRefs } from 'pinia';
import { userSelection } from '@/store/modules/userSelection.ts'

// let background_mode = ref('')
// let background_color = ref('')
// let draw_lines = ref('')
// let stroke_color = ref('')
// let dashed = ref('')
// let thickness = ref('')

let background_mode = storeToRefs(userSelection()).modificationBackgroundMode;
let background_color = storeToRefs(userSelection()).modificationBackgroundColor;
let draw_lines = storeToRefs(userSelection()).modificationDrawLines;
let stroke_color = storeToRefs(userSelection()).modificationStrokeColor;
let dashed = storeToRefs(userSelection()).modificationDashed;
let thickness = storeToRefs(userSelection()).modificationThickness;

const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])

</script>

<style scoped></style>