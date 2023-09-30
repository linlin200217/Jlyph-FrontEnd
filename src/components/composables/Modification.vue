<template>
    <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="D3"></Panel>
    <Header text="Modification"></Header>
    <div class="flex flex-col flex-nowrap m-0 p-2">
        <p v-show="showBackgroundMode()" class="text-left text-sm">background mode</p>
        <div v-show="showBackgroundMode()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="modificationBackgroundMode" class="ml-4">
                <el-radio label="transparent" size="large">Transparent</el-radio>
                <el-radio label="color" size="large">
                    <Cap></Cap>olored
                </el-radio>
            </el-radio-group>
        </div>

        <p v-show="showBackgroundColor()" class="text-left text-sm">background color</p>
        <div v-show="showBackgroundColor()">
            <el-color-picker v-model="modificationBackgroundColor" color-format="hex" :predefine="predefineColors" />
        </div>


        <p v-show="showDrawLines()" class="text-left text-sm">draw lines</p>
        <div v-show="showDrawLines()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="modificationDrawLines" class="ml-4">
                <el-radio label="true" size="large">True</el-radio>
                <el-radio label="false" size="large">False</el-radio>
            </el-radio-group>
        </div>

        <p v-show="showStrokeColor()" class="text-left text-sm">stroke color</p>
        <div v-show="showStrokeColor()">
            <el-color-picker v-model="modificationStrokeColor" color-format="hex" :predefine="predefineColors" />
        </div>


        <p v-show="showDashed()" class="text-left text-sm">dashed</p>
        <div v-show="showDashed()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="modificationDashed" class="ml-4">
                <el-radio label="false" size="large">
                    <div class="w-10 flex-grow border-t-4 border-solid border-black"></div>
                </el-radio>
                <el-radio label="true" size="large">
                    <div class="w-10 flex-grow border-t-4 border-dashed border-black"></div>
                </el-radio>
            </el-radio-group>
        </div>

        <p v-show="showBorderThick()" class="text-left text-sm">border thickness</p>
        <div v-show="showBorderThick()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="modificationThickness" class="ml-4">
                <el-radio label="1" size="large">
                    <div class="w-10 flex-grow border-t border-solid border-black"></div>
                </el-radio>
                <el-radio label="2" size="large">
                    <div class="w-10 flex-grow border-t-2 border-solid border-black"></div>
                </el-radio>
                <el-radio label="4" size="large">
                    <div class="w-10 flex-grow border-t-4 border-solid border-black"></div>
                </el-radio>
                <el-radio label="8" size="large">
                    <div class="w-10 flex-grow border-t-8 border-solid border-black"></div>
                </el-radio>
            </el-radio-group>
        </div>

        <p v-show="showCanvasColor()" class="text-left text-sm">canvas color</p>
        <div v-show="showCanvasColor()">
            <el-color-picker v-model="data_canvas_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showTextSize()" class="text-left text-sm">text size</p>
        <div v-show="showTextSize()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="data_text_size" class="ml-4">
                <el-radio label="1" size="large">
                    <div class="flex-grow text-center text-black text-xs">text</div>
                </el-radio>
                <el-radio label="2" size="large">
                    <div class="flex-grow text-center text-black text-base">text</div>
                </el-radio>
                <el-radio label="4" size="large">
                    <div class="flex-grow text-center text-black text-xl">text</div>
                </el-radio>
                <el-radio label="8" size="large">
                    <div class="flex-grow text-center text-black text-3xl">text</div>
                </el-radio>
            </el-radio-group>
        </div>

        <p v-show="showTextColor()" class="text-left text-sm">text color</p>
        <div v-show="showTextColor()">
            <el-color-picker v-model="data_text_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showGridColor()" class="text-left text-sm">grid color</p>
        <div v-show="showGridColor()">
            <el-color-picker v-model="data_grid_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showShowGrid()" class="text-left text-sm">show grid</p>
        <div v-show="showShowGrid()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="data_show_grid" class="ml-4">
                <el-radio label="true" size="large">True</el-radio>
                <el-radio label="false" size="large">False</el-radio>
            </el-radio-group>
        </div>

        <p v-show="showFillColor()" class="text-left text-sm">fill color</p>
        <div v-show="showFillColor()">
            <el-color-picker v-model="geo_fill_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showContinentColor()" class="text-left text-sm">continent color</p>
        <div v-show="showContinentColor()">
            <el-color-picker v-model="geo_continent_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showCountryColor()" class="text-left text-sm">country color</p>
        <div v-show="showCountryColor()">
            <el-color-picker v-model="geo_countries_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showLinestyle()" class="text-left text-sm">linestyle</p>
        <div v-show="showLinestyle()" class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="geo_linestyle" class="ml-4">
                <el-radio label="solid" size="large">
                    <div class="w-10 flex-grow border-t-4 border-solid border-black"></div>
                </el-radio>
                <el-radio label="dash" size="large">
                    <div class="w-10 flex-grow border-t-4 border-dashed border-black"></div>
                </el-radio>
            </el-radio-group>
        </div>

        <p v-show="showCoastlines()" class="text-left text-sm">coastlines</p>
        <div v-show="showCoastlines()">
            <el-color-picker v-model="geo_coastlines" color-format="hex" :predefine="predefineColors" />
        </div>

        <p v-show="showLakeColor()" class="text-left text-sm">lake color</p>
        <div v-show="showLakeColor()">
            <el-color-picker v-model="geo_lake_color" color-format="hex" :predefine="predefineColors" />
        </div>

        <div class="ml-auto">
            <el-button type="primary" native-type="submit" @click="call_placement" round>Done</el-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia';

import Panel from "./Panel.vue"
import Header from './Header.vue';
import { dataProcess } from '@/store/modules/dataProcess.ts'
import { userSelection } from '@/store/modules/userSelection.ts'
import { process_post, placement_post } from '@/api/index.ts'

const useSelection = userSelection();
const { modificationBackgroundMode, modificationBackgroundColor, modificationDrawLines, modificationStrokeColor, modificationDashed, modificationThickness, data_canvas_color, data_text_size, data_text_color, data_grid_color, data_show_grid, geo_fill_color, geo_continent_color, geo_countries_color, geo_linestyle, geo_coastlines, geo_lake_color } = storeToRefs(useSelection);
const useDataProcess = dataProcess();

const get_column_by_key = (key) => {
    let key_index = useDataProcess.categorical_result.indexOf(key)
    let column = useDataProcess.cat_key[key_index]
    return column
}

const call_process = () => {

    let process_images = [];
    for (let i = 0; i < useSelection.generated_image_id.length; i++) {
        let element = useSelection.generated_image_id[i];

        let img = {
            color: element.color_value,
            color_column: get_column_by_key("color"),
            texture: element.texture_value,
            texture_column: get_column_by_key("texture"),
            image_id: element.image_id,
        }
        process_images.push(img)
    }

    let process_data = {
        design: useSelection.glyphType,
        images: process_images,
        Numerical: useDataProcess.numerical1,
        process_type: useSelection.styleType,
        size_of_whole: useSelection.spaceSize,
        data_title: useDataProcess.dataTitle,
    }

    process_post(process_data).then(response => {
        useDataProcess.process_result = response.images
    }).catch(error => {
        console.log(error)
    })
}

const call_placement = () => {

    let placement_data = {}
    if (useSelection.placementType === "grid") {
        placement_data = {
            design: useSelection.glyphType,
            drawer_by: useSelection.placement_drawer,
            images: useDataProcess.process_result,
            method: useSelection.placementType,
            data_title: useDataProcess.dataTitle,
            border_thickness: Number(useSelection.modificationThickness),
            color_fill: useSelection.modificationStrokeColor,
            dashed: useSelection.modificationDashed,
            draw_lines: useSelection.modificationDrawLines,
            background_type: useSelection.modificationBackgroundMode,
            background_color: useSelection.modificationBackgroundColor
        }
    }


    if (useSelection.placementType === "data") {
        placement_data = {
            design: useSelection.glyphType,
            drawer_by: useSelection.placement_drawer,
            images: useDataProcess.process_result,
            method: useSelection.placementType,
            data_title: useDataProcess.dataTitle,
            column1: useDataProcess.latitude_column,
            column2: useDataProcess.longitude_column,
            text_size: Number(useSelection.data_text_size),
            text_color: useSelection.data_text_color,
            grid_color: useSelection.data_grid_color,
            show_grid: useSelection.data_show_grid,
            background_type: useSelection.modificationBackgroundMode,
            background_color: useSelection.modificationBackgroundColor
        }
    }

    if (useSelection.placementType === "geo") {
        placement_data = {
            design: useSelection.glyphType,
            drawer_by: useSelection.placement_drawer,
            images: useDataProcess.process_result,
            method: useSelection.placementType,
            data_title: useDataProcess.dataTitle,
            column1: useDataProcess.latitude_column,
            column2: useDataProcess.longitude_column,
            fill_color: useSelection.geo_fill_color,
            continent_color: useSelection.geo_continent_color,
            countries_color: useSelection.geo_countries_color,
            linestyle: useSelection.geo_linestyle,
            coastlines: useSelection.geo_coastlines,
            lake_color: useSelection.geo_lake_color,
        }
    }
console.log(placement_data);

    placement_post(placement_data).then(data => {
        useDataProcess.result_image_id = data.image_id
    }).catch(error => {
        console.log(error)
    })
}

const run_placement = () => {
    call_process()
    call_placement()
}

const showBackgroundMode = () => {
    if (useSelection.placementType === "grid") {
        return true
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showBackgroundColor = () => {
    if (useSelection.placementType === "grid") {
        return true
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showDrawLines = () => {
    if (useSelection.placementType === "grid") {
        return true
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showStrokeColor = () => {
    if (useSelection.placementType === "grid") {
        return true
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showDashed = () => {
    if (useSelection.placementType === "grid") {
        return true
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showBorderThick = () => {
    if (useSelection.placementType === "grid") {
        return true
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showCanvasColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showTextSize = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showTextColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showGridColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showShowGrid = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return true
    }
    if (useSelection.placementType === "geo") {
        return false
    }
}

const showFillColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return true
    }
}

const showContinentColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return true
    }
}

const showCountryColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return true
    }
}

const showLinestyle = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return true
    }
}

const showCoastlines = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return true
    }
}

const showLakeColor = () => {
    if (useSelection.placementType === "grid") {
        return false
    }
    if (useSelection.placementType === "data") {
        return false
    }
    if (useSelection.placementType === "geo") {
        return true
    }
}

const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
])

</script>

<style scoped></style>