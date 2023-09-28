<template>
    <div class="flex justify-center m-2">
        <h3 class="font-semibold text-base tracking-wide text-center">{{ text }}</h3>
    </div>
</template>

<script setup lang="ts">
defineProps(['text'])
</script>

<style scoped></style>