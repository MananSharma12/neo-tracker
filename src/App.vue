<script setup lang="ts">
import {onMounted} from 'vue'
import {useNEOData} from '~/composables/useNEOData'

const {fetchNEOData} = useNEOData()

onMounted(() => {
  fetchNEOData()
})

import NEOList from "~/components/NEOTracker/NEOList.vue";
import NEOHazardDistribution from "~/components/NEOTracker/NEOHazardDistribution.vue";
// import NEORiskChart from "~/components/NEOTracker/NEORiskChart.vue";
// import NEOTimeline from "~/components/NEOTracker/NEOTimeline.vue";
</script>

<template>
  <div class="container mx-auto my-8">
    <h1 class="text-2xl font-bold mb-4">NEO Tracker Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NEOList/>
      <NEOHazardDistribution/>
<!--      <NEORiskChart/>-->
<!--      <NEOTimeline/>-->
    </div>
  </div>
</template>

<style scoped>
</style>
