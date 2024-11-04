<script setup lang="ts">
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import { VisXYContainer, VisLine } from '@unovis/vue'
import { useNEOStore } from '~/stores/neo'
// import { formatDate } from '~/utils/formatters'
import BaseCard from "~/components/shared/BaseCard.vue";

const neoStore = useNEOStore()
const { dailyNEOCounts } = storeToRefs(neoStore)

const chartData = computed(() => {
  return dailyNEOCounts.value.map(({ date, count, hazardousCount }) => ({
    date: new Date(date),
    'Total NEOs': count,
    'Potentially Hazardous': hazardousCount
  }))
})

const x = (d: any) => d.date
const y = (d: any) => d['Total NEOs']
const y2 = (d: any) => d['Potentially Hazardous']
</script>

<template>
  <BaseCard>
    <template #header>
      <h2 class="text-lg font-bold">NEO Timeline</h2>
    </template>
    <template #content>
      <VisXYContainer :data="chartData" :height="400">
        <VisLine :x="x" :y="y" label="Total NEOs" />
        <VisLine :x="x" :y="y2" label="Potentially Hazardous" />
<!--        <VisAxis type="x" :format="formatDate" />-->
<!--        <VisAxis type="y" />-->
      </VisXYContainer>
    </template>
  </BaseCard>
</template>