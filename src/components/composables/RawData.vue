<template>
  <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="A2"></Panel>
    <div class="flex justify-center m-2 mb-6 ">
        <h3 class="font-semibold text-base tracking-wide text-center">Raw Data</h3>
    </div>
    <div class="flex flex-wrap">
        <div class="m-0">
            <p>Color</p>
            <el-select v-model="value1" class="m-2" placeholder="Select" size="small">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="m-0">
            <p>Numerical2</p>
            <el-select v-model="value2" class="m-2" placeholder="Select" size="small">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import Panel from "@/components/composables/Panel.vue"

const value1 = ref('')
const value2 = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped></style>