<template>
    <Panel main_panel_enabled="true" main_panel_text="D" sub_panel_enabled="true" sub_panel_text="D1"></Panel>
    <div class="flex justify-center m-2 mb-6 ">
        <h3 class="font-semibold text-base tracking-wide text-center">Style Customization</h3>
    </div>
    <div class="flex justify-between mb-2 flex-wrap">
        <el-radio-group v-model="style_type" class="m-auto items-center ">
            <el-radio
            class="text-xl"
            v-for="item in buttons"
            :label="item.text"
            size="large"
            border
            >{{ item.text }}</el-radio>
        </el-radio-group>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import Panel from "./Panel.vue"

let style_type = ref('')
const buttons = [
    { text: 'partial' },
    { text: 'whole' },
    { text: 'combination' },
] as const


</script>

<style scoped></style>