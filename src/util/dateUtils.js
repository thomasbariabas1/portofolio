import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { el, enUS } from 'date-fns/locale'

export const postCardDateFormat = (date, lang, t) => {
        const dateDifference =0
        if(dateDifference>1) {
            return formatRelative(subDays(new Date(), 3), new Date())

        }
        return `${formatDistance(new Date(date), new Date(),  {locale: lang ==='gr'?el:enUS})} ${t&&t('ago')}`

}