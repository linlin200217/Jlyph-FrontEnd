<template>
    <Panel main_panel_enabled="true" main_panel_text="A" sub_panel_enabled="true" sub_panel_text="A1"></Panel>
    <Header text="Glyph Design Type"></Header>
    <div class="flex justify-between mb-2 flex-wrap">
        <el-radio-group v-model="glyph_type" class="m-auto items-center ">
            <el-radio class="text-xl" v-for="item in buttons" :label="item.text" size="large" border>{{ item.text
            }}</el-radio>
        </el-radio-group>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import Panel from "./Panel.vue"
import Header from './Header.vue';
import { userSelection } from '@/store/modules/userSelection.ts'

let userSelec = userSelection();
let glyph_type = ref('')

const buttons = [
    { text: 'partial' },
    { text: 'whole' },
    { text: 'combination' },
]

watch(glyph_type, (newValue, _) => {
    userSelec.glyphType = newValue;
})

</script>

<style scoped></style>