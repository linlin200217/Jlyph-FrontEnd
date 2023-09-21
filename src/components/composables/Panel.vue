<template>
    <div class="relative">
        <span v-if="main_panel_enabled" class="absolute inline-block rounded-full left-0 top-0 w-fit h-fit px-2 bg-amber-300">{{
            main_panel_text }}</span>
        <span v-if="sub_panel_enabled" class="absolute inline-block rounded-full top-0 right-0 w-fit h-fit px-2 bg-amber-300">{{
            sub_panel_text }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps(['main_panel_enabled', 'main_panel_text', 'sub_panel_enabled', 'sub_panel_text'])
</script>

<style scoped></style>