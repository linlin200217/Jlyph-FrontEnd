<template>
    <div class="flex flex-col flex-nowrap justify-center m-4 w-24 h-38">
        <div class="w-24 h-5">
            <el-icon size="large" color="#409EFC" @click="refresh"
                class="place-content-end rounded-full hover:bg-violet-400 hover:cursor-pointer">
                <Refresh class="m-0" />
            </el-icon>
        </div>
        <div class="w-24 h-24 bg-green-800">

        </div>
        <div v-if="modify_enabled" class="w-24 h-auto">
            <el-select v-model="modify_option" class="m-0" placeholder="Modify" size="small">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

defineProps(['modify_enabled'])

let modify_option = ref('')
let modify_enabled = true

function refresh() {
    console.log("refresh clicked");
}
</script>

<style scoped></style>