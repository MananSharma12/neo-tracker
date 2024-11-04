import {defineStore} from "pinia"
import {computed, ref} from 'vue'
import {NEOFeed} from "../types/neo"
import {fetchNEOFeed} from '../services/api'

export const useNEOStore = defineStore('neo', () => {
    const neoFeed = ref<NEOFeed | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const hazardousCount = computed(() => {
        if (!neoFeed.value) return 0
        return Object.values(neoFeed.value.near_earth_objects)
            .flat()
            .filter(neo => neo.is_potentially_hazardous_asteroid)
    })

    const dailyNEOCounts = computed(() => {
        if (!neoFeed.value) return []
        return Object.entries(neoFeed.value.near_earth_objects).map(([date, neos]) => ({
            date,
            count: neos.length,
            hazardousCount: neos.filter(neo => neo.is_potentially_hazardous_asteroid).length
        }))
    })

    const fetchWeeklyFeed = async (startDate: string) => {
        try {
            loading.value = true
            error.value = null
            neoFeed.value = await fetchNEOFeed(startDate)
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred'
        } finally {
            loading.value = false
        }
    }

    return {
        neoFeed,
        loading,
        error,
        hazardousCount,
        dailyNEOCounts,
        fetchWeeklyFeed
    }
})