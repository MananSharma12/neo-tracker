import {ref, onMounted} from 'vue'
import {useNEOStore} from '~/stores/neo.ts'

export const useNEOData = () => {
    const neoStore = useNEOStore()
    const startDate = ref(getStartDate())

    onMounted(() => {
        fetchNEOData()
    })

    const fetchNEOData = async () => {
        await neoStore.fetchWeeklyFeed(startDate.value)
    }

    return {
        startDate,
        fetchNEOData
    }
}

function getStartDate(): string {
    const date = new Date()
    date.setDate(date.getDate() - 6)
    return date.toISOString().slice(0, 10)
}