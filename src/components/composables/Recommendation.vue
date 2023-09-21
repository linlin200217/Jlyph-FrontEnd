<template>
  <Panel main_panel_enabled="false" sub_panel_enabled="true" sub_panel_text="A3"></Panel>
  <div class="flex justify-center m-2 mb-6 ">
    <h3 class="font-semibold text-base tracking-wide text-center">Recommendation Word Cloud</h3>
  </div>
  <div ref="wordcloudRef" class="flex justify-center m-2 w-full h-56"></div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from "echarts"
import 'echarts-wordcloud'

import Panel from "./Panel.vue"

const wordcloudRef = ref()

const initWordCloud = (data: any) => {
  let myChart = echarts.init(wordcloudRef.value);

  const option = {
    title: {
      text: 'keyword',
      show: false
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
      data: data
    }]
  }
  option && myChart.setOption(option);
  window.addEventListener("resize", () => {
    if (myChart) {
      myChart.resize();
    }
  });
}

const data = [
  {
    name: '前端工程师',
    value: 100
  },
  {
    name: '数据可视化',
    value: 50
  },
  {
    name: '大耳朵图图',
    value: 20
  },
  {
    name: '前端工程师',
    value: 150
  },
  {
    name: '数据可视化',
    value: 75
  },
  {
    name: '大耳朵图图',
    value: 55
  }
]

onMounted(() => {
  initWordCloud(data)
})

</script>

<style scoped>
</style>