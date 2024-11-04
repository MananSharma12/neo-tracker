import axios from 'axios'
import 'dotenv/config'
import type { NEOFeed } from '../types/neo'

const API_KEY = process.env.API_KEY
const API_BASE_URL = process.env

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
    date.setDate(date.getDate() + 6) // 1 week range
    return date.toISOString().slice(0, 10)
}