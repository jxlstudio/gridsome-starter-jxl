<template>
    <div id="hero" :class="'bg-blue-600 dark:bg-dark-blue-600 text-white py-' + paddingY + ' bg-cover bg-no-repeat bg-center lazy'" :style="image">
      <b-container>
        <b-row :class="soloSizeAlign">
            <b-column v-if="buttons === true" size="w-full md:w-1/2 lg:w-8/12 xl:w-8/12 py-6 md:py-2 self-center" id="hero-text">
                <slot></slot>
            </b-column>
            <b-column v-if="buttons === true" size="w-full md:w-1/2 lg:w-4/12 xl:w-4/12" class="self-center" id="hero-buttons">
              <p>Buttons Go Here</p>
            </b-column>

            <b-column v-else :size="soloSize + ' text-' + textAlign + ' py-6 md:py-2 self-center '" id="hero-text">
                <slot></slot>
            </b-column>
        </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
    props: {
        paddingY: {
            type: String,
            default: '10'
        },
        bgImage: {
            type: String,
            default: ''
        },
        buttons: {
            type: Boolean,
            default: false
        },
        bgOverlay: {
            type: String,
            default: '41, 71, 95'
        },
        overlayOpacity: {
            type: String,
            default: '0.8'
        },
        textAlign: {
            type: String,
            default: 'center'
        },
        soloSize: {
            type: String,
            default: 'w-full'
        }
    },
    computed: {
        image () {
            if (this.bgImage !== '') {
                // if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
                // return 'background-image: url(' + this.bgImage + '?w=2560&q=90);box-shadow: inset 0 0 0 1000px rgba(25, 25, 25, 0.8);'
                // }
                return `background-image: url(${this.bgImage}?w=2560&fm=jpg&q=40&fl=progressive); box-shadow: inset 0 0 0 1000px rgba(${this.bgOverlay}, ${this.overlayOpacity});`
            } else {
                return ''
            }
        },
        soloSizeAlign () {
            if (this.soloSize !== '') {
                return 'justify-center'
            } else {
                return 'flex-1'
            }
        }
    }
}
</script>