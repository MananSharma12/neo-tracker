<script setup lang="ts">
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import {useNEOStore} from '~/stores/neo'
import {VisSingleContainer, VisDonut, VisTooltip } from '@unovis/vue'
import BaseCard from "~/components/shared/BaseCard.vue";

const neoStore = useNEOStore()
const {neoFeed} = storeToRefs(neoStore)

const chartData = computed(() => {
  if (!neoFeed.value) return []
  const hazardousCount = Object.values(neoFeed.value.near_earth_objects)
      .flat()
      .filter(neo => neo.is_potentially_hazardous_asteroid).length

  const totalCount = Object.values(neoFeed.value.near_earth_objects).flat().length
  const nonHazardousCount = totalCount - hazardousCount

  return [
    { label: 'Non-Hazardous', value: nonHazardousCount },
    { label: 'Hazardous', value: hazardousCount }
  ]
})

const valueAccessor = (d: { value: number }) => d.value

const tooltipTriggers = {
  donutSegment: (d: { label: string; value: number }) => `<div><strong>${d.label}</strong>: ${d.value} NEOs</div>`
}
</script>

<template>
  <BaseCard>
    <template #header>
      <h2 class="text-lg font-bold">NEO Hazard Distribution</h2>
    </template>
    <template #content>
      <VisSingleContainer :data="chartData">
        <VisDonut
            :value="valueAccessor"
            centralLabel="Near Earth Objects Distribution"
            centralSubLabel="Hazardous vs Non-Hazardous"
        />
        <VisTooltip :triggers="tooltipTriggers"/>
      </VisSingleContainer>
    </template>
  </BaseCard>
</template>
