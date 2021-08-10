import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const richtextRender = {
    methods: {
        richtextToHTML (content, imgMaxWidth) {
            // WIP: NEED TO FIX THIS LOGIC
            let imgWidth
            if (imgMaxWidth) {
                imgWidth = imgMaxWidth
            } else {
                imgWidth = '1250'
            }
            return documentToHtmlString(content, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => {
                        if (node.data.target.fields.file.contentType === 'application/pdf') {
                            return `<div class="text-sm bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2">Attached Document: <a href="${node.data.target.fields.file.url}" target="_blank" alt="${node.data.target.fields.title}" title="${node.data.target.fields.title}">${node.data.target.fields.title}</a></div>`
                        } else if (imgMaxWidth) {
                            return `<img src="${node.data.target.fields.file.url}?w=${imgMaxWidth}&fm=webp&q=90" alt="${node.data.target.fields.title} Image" width="${imgWidth}" style="max-width: 100%;" class="mr-1 mb-1 inline-block" />`
                        } else {
                            return `<img src="${node.data.target.fields.file.url}?w=${imgWidth}&fm=webp&q=90" alt="${node.data.target.fields.title} Image" width="${imgWidth}" style="max-width: 100%;" class="mr-1 mb-1 inline-block" />`
                        }
                    },
                    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
                    [INLINES.ASSET_HYPERLINK]: (node, next) => `<a href="${node.data.target.fields.file.url}" target="_blank" rel="noopener" title="Link to ${node.data.target.fields.title} - Opens in New Window">${next(node.content)}</a>`,
                    [INLINES.HYPERLINK]: (node, next) => `<a href="${node.data.uri}" target="_blank" rel="noopener" title="Link to ${next(node.content)} - Opens in New Window">${next(node.content)}</a>`
                }
            })
        },
    }
}