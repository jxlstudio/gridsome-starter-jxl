// This mixin assumes you have the following fields on your Contentful page content model: 
// seoTitle, seoDescription, seoKeywords, bannerImage, 
// You will also need to import siteUrl, siteName, and twitterHandle in your page-query metadata on each page you plan to use this mixin with. (twitterHandle is set in gridsome.server.js)

// Example:
// <page-query>
//     query {
//         metadata {
//             siteName
//             siteUrl
//             phoneNumber
//             twitterHandle
//         }
//     }
// </page-query>

// You will also need to set up fallbacks const below just in case, there are no fallbacks for siteUrl or seoKeywords by default


const defaultSiteName = 'Default Site Title'
const defaultTitle = 'Default Page Title'
const defaultDescription = 'Default Page Description'
const defaultBannerImage = 'https://source.unsplash.com/WLUHO9A_xik/2560x1440'
const defaultTwitterHandle = '@twitterhandle'

export const seo = {
    metaInfo () {
        return {
            title: this.getTitle(),
            meta: [
                { name: "description", content: this.getDesc() },
                // Some Open Graph Tags
                { property: "og:title", content: this.getTitle() },
                { property: "og:description", content: this.getDesc() },
                { property: "og:image", content: this.getBannerImage() },
                { property: "og:image:width", content: '1200' },
                { property: "og:image:height", content: '630' },
                { property: "og:type", content: 'website' },
                { property: "og:site_name", content: this.getSiteName() },
                { property: "og:url",content: this.getPath() },
                // Some Twitter Cards Tags
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: this.getTitle() },
                { name: "twitter:image", content: this.getBannerImage() },
                { name: "twitter:description", content: this.getDesc() },
                { key: 'twitter:site', name: 'twitter:site', content: this.getTwitterHandle() },
                { key: 'twitter:creator', name: 'twitter:creator', content: this.getTwitterHandle() },
            ],
            //Some ld+json tags
            script: [
                {
                    type: "application/ld+json",
                    json: {
                        "@context": "http://schema.org",
                        "@type": "WebPage",
                        description: this.getDesc(),
                        author: {
                            name: this.getSiteName(),
                        },
                        headline: this.getTitle(),
                        image: this.getBannerImage(),
                        keywords: this.$page.data.seoKeywords // there is no fallback for seoKeywords because this field is allowed to be null
                    }
                }
            ]
        }
    },
    methods: {
        getSiteName () {
            if (this.$page.metadata.siteName !== null) {
                return this.$page.metadata.siteName
            } else {
                this.mixinWarning('Site name')
                return defaultSiteName
            }
        },
        getBannerImage () {
            if (this.$page.data.bannerImage != null) {
                // this has 'https:' in the front because Contentful currently returns URI's prefixed with only '//' which throws up a flag on Chrome Devtools console
                return 'https:' + this.$page.data.bannerImage.file.url + decodeURI('?w=1200&h=630&fit=fill')
            } else {
                // Delete or Comment out the console.error on the next line if you plan to use a default bannerImage for any pages on your site.
                this.mixinWarning('bannerImage')
                return defaultBannerImage
            }
        },
        getPath () {
            if (this.$page.metadata.siteUrl !== null) {
                if (this.$router.currentRoute.fullPath === '/') {
                    return this.$page.metadata.siteUrl
                } else {
                    return this.$page.metadata.siteUrl + this.$router.currentRoute.fullPath
                }
            } else {
                this.mixinWarning('siteUrl')
            }
        },
        getTitle () {
            if (this.$page.data.seoTitle !== null) {
                return this.$page.data.seoTitle
            } else {
                this.mixinWarning('seoTitle')
                return defaultTitle
            }
        },
        getDesc () {
            if (this.$page.data.seoDescription !== null) {
                return this.$page.data.seoDescription
            } else {
                this.mixinWarning('seoDescription')
                return defaultDescription
            }
        },
        getTwitterHandle () {
            if (this.$page.metadata.twitterHandle !== null) {
                return this.$page.metadata.twitterHandle
            } else {
                this.mixinWarning('twitterHandle')
                return defaultTwitterHandle
            }
        },
        mixinWarning (missing) {
            console.warn('SEO Mixin Error: ' + missing + ' not found, add ' + missing + ' to page-query')
        }
    }
}