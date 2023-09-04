<template>
    <div class="inline-block flex flex-col w-1/2 h-screen max-h-full p-2">
        <Results></Results>
        <Middlewares></Middlewares>
    </div>
</template>
  
<script setup lang="ts">
import Results from './composables/Results.vue';
import Middlewares from './composables/Middlewares.vue';
</script>

<style scoped></style>