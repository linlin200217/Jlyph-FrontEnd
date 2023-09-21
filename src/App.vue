<template>
  <div class="h-screen w-screen">
    <div class="flex flex-row justify-between">
      <Left />
      <Middle />
      <Right />
    </div>
  </div>
</template>

<script setup lang="ts">
import Left from "./components/Left.vue";
import Middle from "./components/Middle.vue";
import Right from "./components/Right.vue";
</script>
