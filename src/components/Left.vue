<template>
    <div class="inline-block flex flex-col w-1/4 h-screen max-h-full p-2 bg-slate-200">
        <GlyphType></GlyphType>
        <Divider></Divider>
        <RawData></RawData>
        <Divider></Divider>
        <TopicRecomm></TopicRecomm>
        <Divider></Divider>
        <PromptGuide></PromptGuide>
    </div>
</template>
  
<script setup lang="ts">
import GlyphType from "./composables/GlyphType.vue";
import RawData from "./composables/RawData.vue";
import TopicRecomm from "./composables/TopicRecomm.vue";
import PromptGuide from "./composables/PromptGuide.vue"
import Divider from "./composables/Divider.vue";
</script>

<style scoped></style>