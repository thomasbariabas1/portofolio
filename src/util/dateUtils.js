import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export const postCardDateFormat = (date) => {
    console.log('date', date)
        const dateDifference =0
        if(dateDifference>1) {
            return formatRelative(subDays(new Date(), 3), new Date())

        }
        return formatDistance(subDays(new Date(), 3), new Date())

}