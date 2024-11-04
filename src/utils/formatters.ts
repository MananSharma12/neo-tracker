import {format, formatDistance as formatDistanceUtil } from 'date-fns'

export function formatDate(dateString: string): string {
    return format(new Date(dateString), 'MMM d, yyyy')
}

export function formatDistance(distance: string): string {
    // return formatDistanceUtil(0, parseFloat(distance), {unit: 'km'})
    return formatDistanceUtil(0, parseFloat(distance))
}
