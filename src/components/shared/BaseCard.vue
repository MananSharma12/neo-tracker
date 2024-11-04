<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useNEOStore} from '../../stores/neo'
import {LineChart, LineSeries, XAxis, YAxis} from '@unovis/vue'
import {computed} from 'vue'
// import { formatDate } from '../../utils/formatters'

const neoStore = useNEOStore()
const {dailyNEOCounts} = storeToRefs(neoStore)

const chartData = computed(() => {
  return dailyNEOCounts.value.map(({date, count, hazardousCount}) => ({
    date: new Date(date),
    'Total NEOs': count,
    'Potentially Hazardous': hazardousCount
  }))
})
</script>

<template>
  <BaseCard>
    <template #header>
      <h2 class="text-lg font-bold">NEO Timeline</h2>
    </template>
    <template #content>
      <LineChart :data="chartData" class="h-96">
        <LineSeries groupBy="date"/>
        <XAxis timeScale tickFormat="MM/dd"/>
        <YAxis/>
      </LineChart>
    </template>
  </BaseCard>
</template>