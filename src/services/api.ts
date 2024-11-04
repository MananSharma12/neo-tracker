import axios from 'axios'
import type { NEOFeed } from '../types/neo'

const API_KEY = import.meta.env.VITE_API_KEY
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchNEOFeed = async (startDate: string): Promise<NEOFeed> => {
    const { data } = await axios.get<NEOFeed>(`${API_BASE_URL}/feed`, {
        params: {
            start_date: startDate,
            end_date: getEndDate(startDate),
            api_key: API_KEY
        }
    })

    return data
}

function getEndDate(startDate: string): string {
    const date = new Date(startDate)
    date.setDate(date.getDate() + 6)
    return date.toISOString().slice(0, 10)
}