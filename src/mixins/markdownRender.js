import marked from 'marked'

export const markdown = {
    methods: {
        renderMD (content) {
            return marked(content)
        }
    }
}