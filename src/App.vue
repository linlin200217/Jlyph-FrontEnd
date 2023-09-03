<template>
  <div class="h-full w-full">
      <TheNavBar />
      <LeftFilter />
      <MiddleResults />
      <RightFilter />
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "./components/TheNavBar.vue";
import LeftFilter from "./components/LeftFilter.vue";
import MiddleResults from "./components/MiddleResults.vue";
import RightFilter from "./components/RightFilter.vue";
</script>
