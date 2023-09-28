<template>
    <Panel main_panel_enabled="true" main_panel_text="C" sub_panel_enabled="false"></Panel>
    <div class="flex justify-between m-2 h-1/5 bg-gray-300">
        <PreviewSingle></PreviewSingle>
        <div class="relative h-8 w-8">
            <div class="absolute top-0 right-0 m-2">
                <el-button type="primary" native-type="submit" round>Done</el-button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Panel from "./Panel.vue"
import PreviewSingle from "./Preview-single.vue";
</script>

<style scoped></style>