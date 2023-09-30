<template>
    <Panel main_panel_enabled="true" main_panel_text="B" sub_panel_enabled="false"></Panel>
    <Header text="Generation"></Header>
    <div class="flex flex-col flex-nowrap justify-start ml-2">
        <div v-show="true">
            <div class="m-0 p-2">
                <p class="text-left text-sm">Prompt input</p>
            </div>
            <div class="w-3/5 ml-4">
                <el-input v-model="generationPromptInput1" placeholder="Prompt input" clearable />
            </div>
            <div class="m-0 p-2">
                <p class="text-left text-sm">Primary Guide</p>
            </div>
            <div class="flex flex-row flex-nowrap justify-start h-14">
                <div v-for="(image, index) in genePrimary" :key="index" :label="index"
                    class="h-14 w-14 mx-3 hover:bg-sky-200" :class="{ selected: image.selected }"
                    @click="selectGene(index)">
                    <img :src="image.url" :alt="image.alt" />
                </div>
            </div>
        </div>
        <div v-show="componentShow(userSelec.glyphType)">
            <div class="m-0 p-2">
                <p class="text-left text-sm">Secondary prompt input</p>
            </div>
            <div class="w-3/5 ml-4">
                <el-input v-model="generationPromptInput2" placeholder="Secondary prompt input" clearable />
            </div>
            <div class="m-0 p-2">
                <p class="text-left text-sm">Secondary Guide</p>
            </div>
            <div class="flex flex-row flex-nowrap justify-start h-14">
                <div v-for="(image, index) in geneSecondary" :key="index" :label="index"
                    class="h-14 w-14 mx-3 hover:bg-sky-200" :class="{ selected: image.selected }"
                    @click="selectGeneSec(index)">
                    <img :src="image.url" :alt="image.alt" />
                </div>
            </div>
        </div>
        <div class="relative">
            <div class="absolute top-0 right-0 m-2">
                <el-button type="primary" native-type="submit" @click="pregenerate" round>Pre-generate</el-button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import Panel from "./Panel.vue"
import Header from './Header.vue';
import { pregenerate_post } from '@/api/index.ts'
import { userSelection } from '@/store/modules/userSelection.ts'

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
const { generationPromptInput1, generationPromptInput2, generationPrimaryGuide1, generationPrimaryGuide2 } = storeToRefs(userSelec);

function selectGene(index) {
    generationPrimaryGuide1.value = index;
}

function selectGeneSec(index) {
    generationPrimaryGuide2.value = index;
}

function componentShow(target: string) {
    if (target === "combination") {
        return true;
    } else {
        return false;
    }
}

function pregenerate() {
    let data = {
        design: userSelec.glyphType,
        prompt1: generationPromptInput1.value,
        prompt2: generationPromptInput2.value,
        guide1: generationPrimaryGuide1.value,
        guide2: generationPrimaryGuide2.value,
    }

    pregenerate_post(data).then((response: any) => {
        userSelec.pre_generated_image_id = response.image_id;
    }).catch((error: any) => {
        console.log(error)
    })
}

watch(generationPrimaryGuide1, (newValue, preValue) => {
    if (newValue != null) {
        genePrimary.value[newValue].selected = true;
    }
    if (preValue != null) {
        genePrimary.value[preValue].selected = false;
    }
    if (newValue == null) {
        genePrimary.value.forEach((element) => {
            element.selected = false
        })
    }
})

watch(generationPrimaryGuide2, (newValue, preValue) => {
    if (newValue != null) {
        geneSecondary.value[newValue].selected = true;
    }
    if (preValue != null) {
        geneSecondary.value[preValue].selected = false;
    }
    if (newValue == null) {
        geneSecondary.value.forEach((element) => {
            element.selected = false
        })
    }
})
</script>

<style scoped>
.selected {
    background-color: rgb(56 189 248);
}
</style>