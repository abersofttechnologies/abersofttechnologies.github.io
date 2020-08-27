<template>
    <div :class="getClass">
        <b-container>
            <b-row align-v="center">
                <b-col md="7" order-md="2">
                    <section v-scroll-reveal="{ delay:75 }">
                        <img :src="heroImage" class="img-fluid hero-image" :alt="heroAlt">
                    </section>
                </b-col>
                <b-col md="5" order-md="1">
                    <section v-scroll-reveal>
                        <slot/>
                    </section>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Hero",
        props: {
            heroImage: {
                type: String,
                default: require('../assets/hero.png')
            },
            heroAlt: {
                type: String,
                default: 'Hero image'
            },
            variant: {
                type: Number,
                default: 1
            }
        },
        computed: {
            getClass () {
                let cardClass = 'hero';
                if (this.variant === 1) cardClass += ' hero-bg1';
                if (this.variant === 2) cardClass += ' hero-bg2';
                if (this.variant === 3) cardClass += ' hero-bg3';
                return cardClass;
            }
        }
    }
</script>

<style scoped>

</style>
