<template>
    <div class="inline-block flex flex-col w-1/2 h-screen max-h-screen p-2">
        <Results></Results>
        <Preview></Preview>
    </div>
</template>
  
<script setup lang="ts">
import Results from './composables/Results.vue';
import Preview from './composables/Preview.vue';
</script>

<style scoped></style>