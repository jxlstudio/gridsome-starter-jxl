# Gridsome JXL Starter

A Tailwind & Contentful powered Gridsome starter that is the base for most of my front-end projects, feel free to use or fork. As of now, I'm not going to document all the props used with the custom components, but I may change my mind in the future if for some reason this repo gets a fair amount of use. Feel free to drop in the Issues section if you have a question, I will do my best to respond quickly.

## Features
- Gridsome
- Tailwind (With Forms & Dark Mode + optional color scheme toggle)
- Contentful
- SVG Icons Plugin
- Google Analytics Plugin
- Flexsearch Plugin
- Sitemap Plugin
- Day.js (for date/time formatting)
- Lato Typeface
- ES Lint
- Custom Mixins
    - Text Formatting (COMING SOON)
    - Markdown Rendering (COMING SOON)
    - Richtext Rendering (for Contentful)
    - Mobile Device Check (COMING SOON)
    - SEO Defaults (COMING SOON)
    - Filtering & Sorting (COMING SOON)
<details>
    <summary>Custom Components</summary>

    - Accordion (COMING SOON)
    - Button (COMING SOON)
    - Card (COMING SOON)
    - Custom Mixins
    - Divider (HR) (COMING SOON)
    - Featured Video (Hero style Banner with Video Modal) (COMING SOON)
    - Filtering & Sorting
    - Flex Grid Components (Container, Row, Column) (COMING SOON)
    - Footer (COMING SOON)
    - Form Inputs (COMING SOON)
    - Hero (with options for background-image, image overlay, buttons, etc.) (COMING SOON)
    - Loading (COMING SOON)
    - Modal (COMING SOON)
    - Photo (Lots of Options) (COMING SOON)
    - Pill (COMING SOON)
    - Richtext Rendering (for Contentful)
    - SEO Defaults
    - Search Box (COMING SOON)
    - Text Formatting
    - Toast (COMING SOON)
    - Top Navigation with Off-Canvas on Mobile (COMING SOON)
    - UiObject (for accessibility features) (COMING SOON)
    - Video Modal (COMING SOON)
</details>


## Demo
COMING SOON

## Install

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-wp-site https://github.com/jxlstudio/gridsome-starter-jxl`
2. `cd my-gridsome-wp-site` to open folder
3. Set the Contentful, Google Analytics, Tailwind, and Flexsearch required env variables and options in `gridsome.config.js`
5. `gridsome develop` to start local dev server at `http://localhost:8080`
6. Happy coding 🎉🙌

```js
// gridsome.config.js

module.exports = {
  // coming soon
 }

```

## Included templates

- Basic Page with SEO Built-in
- Human Sitemap


## Fontsource-based typeface integration

If you want to change the typeface from Lato, you will need to remove the `fontsource-lato` package via Yarn then add your typeface also via Yarn. More docs and info on Fontsource at https://fontsource.org/docs/getting-started

```
// Example to change from Lato to Open-Sans:
yarn remove @fontsource/lato
yarn add @fontsource/open-sans
```

Then you need to update `main.js`

```
-- import '@fontsource/lato'
++ import '@fontsource/open-sans'
```

Finally, you will need to update `tailwind.config.js`

```
Will add this soon
```