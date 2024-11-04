<script setup lang="ts">
import {computed} from 'vue'
import {useNEOStore} from '../../stores/neo'
// import type { NEOObject } from '../../types/neo'
import BaseCard from '../../components/shared/BaseCard.vue'
import LoadingSpinner from '../../components/shared/LoadingSpinner.vue'
import {formatDate, formatDistance} from '../../utils/formatters'

const neoStore = useNEOStore()
const {neoFeed, loading, error} = storeToRefs(neoStore)

const nearEarthObjects = computed(() => {
  return Object.values(neoStore.neoFeed?.near_earth_objects || {}).flat()
})
</script>

<template>
  <BaseCard>
    <template #header>
      <h2 class="text-lg font-bold">Near-Earth Objects</h2>
    </template>
    <template #content>
      <div v-if="loading" class="flex justify-center">
        <LoadingSpinner/>
      </div>
      <div v-else-if="error" class="text-red-500 font-medium">
        {{ error }}
      </div>
      <div v-else-if="nearEarthObjects.length === 0" class="text-gray-500">
        No Near-Earth Objects found.
      </div>
      <div v-else class="space-y-4">
        <div
            v-for="neo in nearEarthObjects"
            :key="neo.id"
            class="bg-white rounded-lg shadow-md p-4"
        >
          <h3 class="text-lg font-bold">{{ neo.name }}</h3>
          <p class="text-gray-600">
            Potentially Hazardous: {{ neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No' }}
          </p>
          <p class="text-gray-600">
            Estimated Diameter: {{ neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2) }} -
            {{ neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2) }} km
          </p>
          <p class="text-gray-600">
            Closest Approach: {{ formatDate(neo.close_approach_data[0].close_approach_date_full) }}
            ({{ formatDistance(neo.close_approach_data[0].miss_distance.kilometers) }} from Earth)
          </p>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<style scoped>

</style>