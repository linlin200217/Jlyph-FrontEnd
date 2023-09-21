<template>
    <div class="inline-block flex flex-col w-1/4 h-screen max-h-full p-2 bg-slate-200">
        <StyleCustomization></StyleCustomization>
        <Divider></Divider>
        <Placement></Placement>
        <Divider></Divider>
        <Modification></Modification>
        <Legend></Legend>
    </div>
</template>
  
<script setup lang="ts">
import StyleCustomization from './composables/StyleCustomization.vue';
import Placement from './composables/Placement.vue';
import Modification from './composables/Modification.vue';
import Divider from "./composables/Divider.vue";
import Legend from "./composables/Legend.vue";
</script>

<style scoped></style>