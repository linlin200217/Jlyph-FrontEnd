<template>
    <div class="relative left-0 top-0 w-fit h-fit px-2 bg-amber-300">
        <span>{{ panel_text }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['panel_text'])
</script>

<style scoped></style>