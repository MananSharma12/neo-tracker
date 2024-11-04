<script setup lang="ts">
// import { computed } from 'vue'
// import {storeToRefs} from 'pinia'
import { VisXYContainer } from '@unovis/vue'
import BaseCard from "~/components/shared/BaseCard.vue";
// import { useNEOStore } from '~/stores/neo'

// const neoStore = useNEOStore()
// const { dailyNEOCounts } = storeToRefs(neoStore)

const chartData = {
  x: [1,2,3],
  y: [2,3,5]
}

// const chartData = computed(() => {
//   return dailyNEOCounts.value.map(({ date:any, count: any, hazardousCount:any }) => ({
//     date,
//     'Total NEOs': count,
//     'Potentially Hazardous': hazardousCount
//   }))
// })

// const x = (d: any) => d.date
// const y = (d: any) => d['Total NEOs']
// const y2 = (d: any) => d['Potentially Hazardous']
</script>

<template>
  <BaseCard>
    <template #header>
      <h2 class="text-lg font-bold">NEO Risk Assessment</h2>
    </template>
    <template #content>
      <VisXYContainer :data="chartData" :height="400">
<!--        <VisBar :x="x" :y="y" label="Total NEOs" />-->
<!--        <VisBar :x="x" :y="y2" label="Potentially Hazardous" />-->
<!--        <VisAxis type="x" />-->
<!--        <VisAxis type="y" />-->
      </VisXYContainer>
    </template>
  </BaseCard>
</template>