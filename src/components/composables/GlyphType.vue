<template>
    <Panel panel_text="A"></Panel>
    <div class="flex justify-center m-2 mb-6 ">
        <h3 class="font-semibold text-base tracking-wide text-center">Glyph Design Type</h3>
    </div>
    <div class="flex justify-between m-2">
        <button class="text-white">
            <input class="hidden" type="radio" id="Login21" name="row1" />
            <label class="bg-indigo-400 px-8 py-2.5" for="Login21">局部</label>
        </button>
        <button class="text-white">
            <input class="hidden" type="radio" id="Login22" name="row1" />
            <label class="bg-indigo-400 px-8 py-2.5" for="Login22">整体</label>
        </button>
        <button class="text-white">
            <input class="hidden" type="radio" id="Login23" name="row1" />
            <label class="bg-indigo-400 px-8 py-2.5" for="Login23">组合</label>
        </button>
    </div>
</template>
  
<script setup lang="ts">
import Panel from "./Panel.vue"
</script>

<style scoped></style>