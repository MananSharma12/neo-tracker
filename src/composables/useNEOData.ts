import {useNEOStore} from '../../stores/neo'
import {ref, onMounted} from 'vue'

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
    date.setDate(date.getDate() - 6) // 1 week ago
    return date.toISOString().slice(0, 10)
}