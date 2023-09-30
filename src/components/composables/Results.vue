<template>
    <Panel main_panel_enabled="true" main_panel_text="E" sub_panel_enabled="false"></Panel>
    <div class="m-2 h-4/5">
        <img class="w-4/5 mx-auto" id="result"/>
    </div>
    <div><el-button type="primary" @click="show_result" round>refresh</el-button></div>
</template>
  
<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';

import Panel from "./Panel.vue"
import { image_get } from '@/api/index.ts'
import { dataProcess } from '@/store/modules/dataProcess.ts'

const useDataProcess = dataProcess();
const { result_image_id } = storeToRefs(useDataProcess);

const show_result = () => {
    image_get(result_image_id.value).then((response) => {
        let imageNode = document.getElementById("result")
        let imgUrl = URL.createObjectURL(response);        
        imageNode.src = imgUrl
    })
}

watch(result_image_id, () => {
    console.log(result_image_id.value);
    show_result();
})
</script>

<style scoped></style>