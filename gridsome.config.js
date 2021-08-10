// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GRIDSOME_GOOGLE_ANALYTICS_ID
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.GRIDSOME_CTFL_SPACE_ID, // required
        accessToken: process.env.GRIDSOME_API_KEY, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // exclude: [],
        cacheTime: 60000,
        config: {
          '/*': {
            changefreq: 'monthly',
            priority: 0.5
          }
        }
      }
    }
  ],
  chainWebpack (config) {
    config.mode(process.env.GRIDSOME_WEBPACK_CONFIG_MODE)

    // Load SVG Icons as components
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
	}
}
