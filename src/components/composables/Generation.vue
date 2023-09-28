<template>
    <Panel main_panel_enabled="true" main_panel_text="B" sub_panel_enabled="false"></Panel>
    <Header text="Generation"></Header>
    <div class="flex flex-col flex-nowrap justify-start ml-2">
        <div v-show="true">
            <div class="m-0 p-2">
                <p class="text-left text-sm">Prompt input</p>
            </div>
            <div class="w-3/5 ml-4">
                <el-input v-model="promptInput" placeholder="Prompt input" clearable />
            </div>
            <div class="m-0 p-2">
                <p class="text-left text-sm">Primary Guide</p>
            </div>
            <div class="flex flex-row flex-nowrap justify-start h-14">
                <div v-for="(image, index) in genePrimary" :key="index" :label="index" class="h-14 w-14 mx-3 hover:bg-sky-200"
                    :class="{ selected: image.selected }" @click="selectGene(image, index)">
                    <img :src="image.url" :alt="image.alt" />
                </div>
            </div>
        </div>
        <div v-show="componentShow(userSelec.glyphType)">
            <div class="m-0 p-2">
                <p class="text-left text-sm">Secondary prompt input</p>
            </div>
            <div class="w-3/5 ml-4">
                <el-input v-model="promptInputSec" placeholder="Secondary prompt input" clearable />
            </div>
            <div class="m-0 p-2">
                <p class="text-left text-sm">Secondary Guide</p>
            </div>
            <div class="flex flex-row flex-nowrap justify-start h-14">
                <div v-for="(image, index) in geneSecondary" :key="index" :label="index" class="h-14 w-14 mx-3 hover:bg-sky-200"
                    :class="{ selected: image.selected }" @click="selectGeneSec(image, index)">
                    <img :src="image.url" :alt="image.alt" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import Panel from "./Panel.vue"
import Header from './Header.vue';
import { userSelection } from '@/store/modules/userSelection.ts'


let genSelec = ref('')
let promptInput = ref('')
let promptInputSec = ref('')
let genePrimary = ref([
    { id: 0, type: 'generation', url: 'src/assets/figures/gen-circle.png', alt: 'circle', selected: false },
    { id: 1, type: 'generation', url: 'src/assets/figures/gen-rectangle.png', alt: 'rectangle', selected: false },
    { id: 2, type: 'generation', url: 'src/assets/figures/gen-square.png', alt: 'square', selected: false },
])
let geneSecondary = ref([
    { id: 0, type: 'generation', url: 'src/assets/figures/gen-circle.png', alt: 'circle', selected: false },
    { id: 1, type: 'generation', url: 'src/assets/figures/gen-rectangle.png', alt: 'rectangle', selected: false },
    { id: 2, type: 'generation', url: 'src/assets/figures/gen-square.png', alt: 'square', selected: false },
])
let userSelec = userSelection();

function selectGene(image, index) {
    genSelec.value = index;
    image.selected = true;

    genePrimary.value.forEach((item) => {
        if (item.id != image.id) {
            item.selected = false;
        }
    })
}

function selectGeneSec(image, index) {
    genSelec.value = index;
    image.selected = true;

    geneSecondary.value.forEach((item) => {
        if (item.id != image.id) {
            item.selected = false;
        }
    })
}

function componentShow(target: string) {
    if (target === "combination") {
        return true;
    } else {
        return false;
    }
}
</script>

<style scoped>
.selected {
    background-color: rgb(56 189 248);
}
</style>