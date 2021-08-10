import dayjs from 'dayjs'

export const formatting = {
    methods: {
        humanTime (timestamp) {
            return dayjs(timestamp).format('MM-DD-YYYY')
        },
        stripHTML (content) {
            return content.replace(/(<([^>]+)>)/ig,"")
        },
        truncateText (str, length, ending) {
            if (length == null) {
                length = 300
            }
            if (ending == null) {
                ending = '...'
            }
            if (str.length > length) {
                return str.substring(0, length - ending.length) + ending
            } else {
                return str
            }
        }
    }
}