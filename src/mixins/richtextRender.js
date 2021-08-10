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
                        if (imgMaxWidth) {
                            return `<img src="${node.data.target.fields.file.url}?w=${imgMaxWidth}&fm=webp&q=90" alt="${node.data.target.fields.title} Image" width="${imgWidth / 2}" style="max-width: 100%;" class="pb-2" loading="lazy" />`
                        } else {
                            return `<img src="${node.data.target.fields.file.url}?w=${imgWidth}&fm=webp&q=90" alt="${node.data.target.fields.title} Image" width="${imgWidth}" style="max-width: 100%;" class="pb-2" loading="lazy" />`
                        }
                    },
                    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
                    [INLINES.ASSET_HYPERLINK]: (node, next) => `<a href="${node.data.target.fields.file.url}" target="_blank" rel="noopener" title="Link to ${node.data.target.fields.title} - Opens in New Window">${next(node.content)} <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link w-4 h-4 pb-1 inline"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>`,
                    [INLINES.HYPERLINK]: (node, next) => `<a href="${node.data.uri}" target="_blank" rel="noopener" title="Link to ${next(node.content)} - Opens in New Window">${next(node.content)}</a>`
                }
            })
        },
    }
}