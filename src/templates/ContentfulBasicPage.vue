<template>
    <Layout>
        <Hero :bgImage="'https:' + $page.data.bannerImage.file.url" paddingY="40">
            <h1>{{$page.data.title}}</h1>
        </Hero>
        <b-container class="mb-20 dark:text-white">
            <b-row paddingY="6">
                <b-column>
                    <div v-html="richtextToHTML($page.data.pageContent)"></div>
                </b-column>
            </b-row>
        </b-container>
    </Layout>
</template>

<page-query>
    query contentfulBasicPage ($id: ID!) {
        metadata {
            siteName
            siteUrl
            twitterHandle
        }
        data: contentfulBasicPage(id: $id) {
            id
            title
            slug
            updatedAt
            seoTitle
            seoDescription
            seoKeywords
            pageContent
            bannerImage {
                file {
                    url
                }
            }
        }
    }
</page-query>

<script>
import { richtextRender } from '@/mixins/richtextRender'
import { formatting } from '@/mixins/formatting'
import { seo } from '@/mixins/seo'
export default {
    mixins: [
        richtextRender,
        formatting,
        seo
    ]
}
</script>