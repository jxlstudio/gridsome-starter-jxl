export const convertFileSize = {
    methods: {
        convertFileSize (size) {
            if (size < 999999) {
                return (size / 10000).toFixed(2) + ' KB'
            } else {
                return (size / 1000000).toFixed(2) + ' MB'
            }
        }
    }
}