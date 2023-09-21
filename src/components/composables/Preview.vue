<template>
    <Panel main_panel_enabled="true" main_panel_text="C" sub_panel_enabled="false"></Panel>
    <div class="flex justify-between m-2 h-1/5 bg-gray-300">
        <PreviewSingle></PreviewSingle>
    </div>
</template>
  
<script setup lang="ts">
import Panel from "./Panel.vue"
import PreviewSingle from "./Preview-single.vue";
</script>

<style scoped></style>