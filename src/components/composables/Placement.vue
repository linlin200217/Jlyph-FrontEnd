<template>
    <Panel panel_text="D"></Panel>
    <div class="flex justify-center m-2 mb-6 ">
        <h3 class="font-semibold text-base tracking-wide text-center">Placement</h3>
    </div>
    <div class="flex justify-between m-2">
        <button class="text-white">
            <input class="hidden" type="radio" id="Login21" name="row1" />
            <label class="bg-indigo-400 px-8 py-2.5" for="Login21">常规</label>
        </button>
        <button class="text-white">
            <input class="hidden" type="radio" id="Login22" name="row1" />
            <label class="bg-indigo-400 px-8 py-2.5" for="Login22">基于数据</label>
        </button>
        <button class="text-white">
            <input class="hidden" type="radio" id="Login23" name="row1" />
            <label class="bg-indigo-400 px-8 py-2.5" for="Login23">基于地理</label>
        </button>
    </div>
</template>
  
<script setup lang="ts">
import Panel from "./Panel.vue"
</script>

<style scoped></style>