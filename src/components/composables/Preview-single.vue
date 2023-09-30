<template>
    <div class="flex flex-col flex-nowrap justify-between m-4 w-24 h-38">
        <div class="w-24 h-5">
            <el-icon size="large" color="#409EFC" @click="regenerate"
                class="place-content-end rounded-full hover:bg-violet-400 hover:cursor-pointer">
                <Refresh class="m-0" />
            </el-icon>
        </div>
        <div class="w-24 h-24">
            <img :id="get_img_id(props.position, props.slot_id)" />
        </div>
        <div v-if="modify_enabled" class="w-24 h-auto">
            <el-select v-if="showColorModify()" v-model="modify_color" class="m-0" placeholder="Color" size="small" clearable>
                <el-option v-for="item in colors" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-if="showTextureModify()" v-model="modify_texture" class="m-0" placeholder="Texture" size="small" clearable>
                <el-option v-for="item in textures" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { image_get, regenerate_post, pregenerate_post } from '@/api/index.ts'
import { storeToRefs } from 'pinia'
import { dataProcess } from '@/store/modules/dataProcess.ts'
import { userSelection } from '@/store/modules/userSelection.ts'

const useSelection = userSelection()
const useDataProcess = dataProcess();
const { categorical_result } = storeToRefs(useDataProcess)

const props = defineProps(['image_id', 'modify_enabled', 'slot_id', 'position'])

const modify_color = ref('')
const modify_texture = ref('')

const showColorModify = () => {
    let include_color = false
    if (categorical_result.value.includes("color")) { include_color = true }
    categorical_result.value.forEach((element) => {
        if (element.includes("color")) {
            include_color = true
        }
    })
    return include_color
}

const showTextureModify = () => {
    let include_texture = false
    if (categorical_result.value.includes("texture")) { include_texture = true }
    categorical_result.value.forEach((element) => {
        if (element.includes("texture")) {
            include_texture = true
        }
    })
    return include_texture
}

const get_img_id = (position, index) => {
    if (position === 'pre') {
        return "pre-img-" + index.toString()
    }
    if (position === 'gen') {
        return "gen-img-" + index.toString()
    }
}

function get_image_with_id() {
    image_get(props.image_id).then((response) => {
        let imageNode = document.getElementById(get_img_id(props.position, props.slot_id))
        let imgUrl = URL.createObjectURL(response);
        imageNode.src = imgUrl
    })
}

function regenerate() {
    if (props.position === "pre") {
        let data = {
            design: useSelection.glyphType,
            prompt1: useSelection.generationPromptInput1,
            prompt2: useSelection.generationPromptInput2,
            guide1: useSelection.generationPrimaryGuide1,
            guide2: useSelection.generationPrimaryGuide2,
        }

        pregenerate_post(data).then((response: any) => {
            let new_id = response.image_id[props.slot_id].image_id
            image_get(new_id).then((res) => {
                let imageNode = document.getElementById(get_img_id(props.position, props.slot_id))
                let imgUrl = URL.createObjectURL(res);
                imageNode.src = imgUrl
            })
        }).catch((error: any) => {
            console.log(error)
        })
    }

    if (props.position === "gen") {
        let data = {
            image_id: props.image_id,
            design: useSelection.glyphType,
            prompt: useSelection.generationPromptInput1,
            color: modify_color.value,
            texture: modify_texture.value
        }
        
        regenerate_post(data).then(response => {
            image_get(response.image_id).then((res) => {
                let imageNode = document.getElementById(get_img_id(props.position, props.slot_id))
                let imgUrl = URL.createObjectURL(res);
                imageNode.src = imgUrl
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

const colors = [
    { value: 'pink', label: 'pink' },
    { value: 'yellow', label: 'yellow' },
    { value: 'green', label: 'green' },
    { value: 'blue', label: 'blue' },
    { value: 'black', label: 'black' },
    { value: 'grey', label: 'grey' },
    { value: 'purple', label: 'purple' },
    { value: 'red', label: 'red' },
    { value: 'orange', label: 'orange' },
    { value: 'white', label: 'white' },
]

const textures = [
    { value: 'plastic', label: 'plastic' },
    { value: 'iron', label: 'iron' },
    { value: 'glass', label: 'glass' },
    { value: 'paper', label: 'paper' },
    { value: 'fabric', label: 'fabric' },
    { value: 'wooden', label: 'wooden' },
    { value: 'stainless steel', label: 'stainless steel' },
    { value: 'copper', label: 'copper' },
    { value: 'porcelain', label: 'porcelain' },
    { value: 'Rubber', label: 'Rubber' },
]

onMounted(() => {
    get_image_with_id()
})
</script>

<style scoped></style>