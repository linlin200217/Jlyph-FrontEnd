<template>
    <div class="block my-2 text-sm">
        <el-upload ref="upload" class="upload-demo" :http-request="upload_json_file" action="" accept="application/csv"
            :limit="1" :on-exceed="handleExceed" :auto-upload="false">
            <template #trigger>
                <el-button type="primary">Upload CSV data</el-button>
            </template>
            <el-button class="ml-3" type="success" @click="submitUpload">
                upload<el-icon v-show="showLoading" class="el-icon--right is-loading"><Loading /></el-icon>
            </el-button>
            <template #tip>
                <div class="el-upload__tip text-red">
                    limit 1 file, new file will cover the old file
                </div>
            </template>
        </el-upload>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

import { upload_post } from '@/api/index.ts'
import { dataProcess } from '@/store/modules/dataProcess.ts'

let useDataProcess = dataProcess();
const upload = ref<UploadInstance>()
const { showLoading } = storeToRefs(useDataProcess)

const handleExceed: UploadProps['onExceed'] = (files) => {
    upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    upload.value!.handleStart(file)
}

const submitUpload = () => {
    showLoading.value = true
    upload.value!.submit()
}

const upload_json_file = (file: any) => {
    const formData = new FormData();
    formData.append('file', file.file);

    upload_post(formData).then(data => {
        showLoading.value = false
        useDataProcess.dataTitle = data.data_title;
        useDataProcess.categorical = data.Categorical;
        useDataProcess.numerical = data.Numerical;
        useDataProcess.wordcloud = data.wordcloud;
    }).catch(error => {
        console.log(error)
    })
    
}

</script>