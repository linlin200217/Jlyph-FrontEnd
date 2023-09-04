<template>
    <div class="inline-block flex flex-col w-1/4 h-screen max-h-full p-2 bg-slate-200">
        <Placement></Placement>
        <Divider></Divider>
        <Data></Data>
        <Divider></Divider>
        <Modification></Modification>
    </div>
</template>
  
<script setup lang="ts">
import Placement from './composables/Placement.vue';
import Data from './composables/Data.vue';
import Modification from './composables/Modification.vue';
import Divider from "./composables/Divider.vue";
</script>

<style scoped></style>