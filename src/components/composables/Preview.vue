<template>
    <Panel main_panel_enabled="true" main_panel_text="C" sub_panel_enabled="false"></Panel>
    <div class="flex flex-row flex-nowrap basis-1/6 justify-start m-1 h-1/5 bg-gray-300">
        <div v-for="(item, index) in pre_generated_image_id" class="inline-block">
            <PreviewSingle :image_id="item.image_id" :slot_id="index" :modify_enabled="false" position="pre"></PreviewSingle>
        </div>
        <div class="inline-block h-full w-1 self-stretch bg-neutral-100 opacity-100 "></div>
        <div v-for="(item, index) in generated_image_id" class="inline-block">
            <PreviewSingle :image_id="item.image_id" :slot_id="index" :modify_enabled="true" position="gen"></PreviewSingle>
        </div>
        <div class="relative grow w-8 h-8">
            <div class="absolute top-0 right-0 m-2">
                <el-button type="primary" native-type="submit" @click="generate" round>Generate</el-button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { dataProcess } from '@/store/modules/dataProcess.ts'
import { userSelection } from '@/store/modules/userSelection.ts'
import { generate_post } from '@/api/index.ts'

import Panel from "./Panel.vue"
import PreviewSingle from "./Preview-single.vue";

const useSelection = userSelection();
const useDataProcess = dataProcess();
const { glyphType, pre_generated_image_id, generated_image_id } = storeToRefs(useSelection);

const generate = () => {

    let this_prompt1 = useSelection.generationPromptInput1 // array in whole
    let this_image_id = useSelection.pre_generated_image_id // string in partial
    
    if ( glyphType.value === "partial" ) {
        this_image_id = this_image_id[0].image_id
    }
    if ( glyphType.value === "whole" ) {
        this_prompt1 = [this_prompt1]
    }

    let data = {
        design: useSelection.glyphType,
        Categorical1: useDataProcess.categorical1,
        Categorical2: useDataProcess.categorical2,
        prompt1: this_prompt1,
        prompt2: useSelection.generationPromptInput2,
        guide1: useSelection.generationPrimaryGuide1,
        guide2: useSelection.generationPrimaryGuide2,
        image_id: this_image_id,
        data_title: useDataProcess.dataTitle,
    }

    generate_post(data).then((response: any) => {
        useSelection.generated_image_id = response.image_id;
    }).catch((error: any) => {
        console.log(error)
    })
}
</script>

<style scoped></style>