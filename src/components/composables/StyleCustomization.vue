<template>
    <Panel main_panel_enabled="true" main_panel_text="D" sub_panel_enabled="true" sub_panel_text="D1"></Panel>
    <Header text="Style Customization"></Header>
    <div class="flex flex-row flex-nowrap justify-start h-14">
        <div v-for="(image, index) in imageFilter(images, userSelec.glyphType)" :key="index" :label="index"
            class="h-14 w-14 mx-3 hover:bg-sky-200" :class="{ selected: image.selected }" @click="selectCust(image.id, index)">
            <img :src="image.url" :alt="image.alt" />
        </div>
        <div class="justify-end">
            <el-input-number v-model="spaceSize" :min="20" :max="500" size="small" />
            <p class="el-upload__tip text-red">Space Size</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import Panel from "./Panel.vue"
import Header from "./Header.vue"
import { userSelection } from '@/store/modules/userSelection.ts'

let userSelec = userSelection();
const { styleType, styleID, spaceSize } = storeToRefs(userSelec);

const images = ref([
    { id: 0, type: 'combination', url: 'src/assets/figures/sty-com-0.png', alt: 'Combination-0', selected: false },
    { id: 1, type: 'combination', url: 'src/assets/figures/sty-com-1.png', alt: 'Combination-1', selected: false },
    { id: 2, type: 'combination', url: 'src/assets/figures/sty-com-2.png', alt: 'Combination-2', selected: false },
    { id: 3, type: 'partial', url: 'src/assets/figures/sty-partial-0.png', alt: 'Partial-0', selected: false },
    { id: 4, type: 'partial', url: 'src/assets/figures/sty-partial-1.png', alt: 'Partial-1', selected: false },
    { id: 5, type: 'whole', url: 'src/assets/figures/sty-whole-0.png', alt: 'Whole-0', selected: false },
    { id: 6, type: 'whole', url: 'src/assets/figures/sty-whole-1.png', alt: 'Whole-1', selected: false },
])

function imageFilter(images: any, target: string) {
    return images.filter((item: any) => item.type === target)
}

function selectCust(id, index) {
    styleType.value = index;
    styleID.value = id;
}

watch(styleID, (newValue, preValue) => {
    if (newValue != null) {
        images.value[newValue].selected = true;
    }
    if (preValue != null) {
        images.value[preValue].selected = false;
    }
    if (newValue == null) {
        images.value.forEach((element) => {
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