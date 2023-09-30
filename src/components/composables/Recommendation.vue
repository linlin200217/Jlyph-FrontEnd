<template>
  <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="A3"></Panel>
  <Header text="Recommendation Word Cloud"></Header>
  <div id="word_cloud" class="flex justify-center m-2 w-full h-48"></div>
  <div><el-button size="small" :icon="Refresh" @click="refresh" circle /></div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import * as echarts from "echarts"
import 'echarts-wordcloud'

import Panel from "./Panel.vue"
import Header from './Header.vue'
import { storeToRefs } from 'pinia'
import { dataProcess } from '@/store/modules/dataProcess.ts'
import { Refresh } from '@element-plus/icons-vue'

const useDataProcess = dataProcess();
const { dataTitle, word_data } = storeToRefs(useDataProcess);

const refresh = () => {
  initWordCloud()
}

const initWordCloud = () => {
  let myChart = echarts.init(document.getElementById('word_cloud'));

  const option = {
    title: {
      text: dataTitle.value,
      show: true
    },
    tooltip: {},
    series: [{
      type: 'wordCloud',
      shape: 'circle',
      keepAspect: false, // Keep aspect ratio of maskImage or 1:1 for shapes

      left: 'center',
      top: 'center',
      width: '90%',
      height: '100%',
      right: null,
      bottom: null,
      sizeRange: [12, 60], // Text size range
      rotationRange: [-45, 45], // Text rotation range
      rotationStep: 15,
      gridSize: 8, // the larger the grid size, the bigger the gap between words.
      drawOutOfBound: false,
      shrinkToFit: false,
      layoutAnimation: true,

      textStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: function () {
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        },
        emphasis: {
          focus: 'self',
          textStyle: {
            textShadowBlur: 10,
            textShadowColor: '#333'
          }
        }
      },
      data: word_data.value
    }]
  }
  option && myChart.setOption(option);
  window.addEventListener("resize", () => {
    if (myChart) {
      myChart.resize();
    }
  });
}

watch(() => [...word_data.value], () => {
  initWordCloud()
})

</script>

<style scoped></style>