<template xmlns:span="http://www.w3.org/1999/html">
    <card class="service-card">
        <b-row>
            <b-col cols="12">
                <img :src="iconSrc" :alt="iconAlt" class="icon"/>
            </b-col>
            <b-col cols="12">
                <div class="name" :style="getTitleStyle">{{title}}</div>
            </b-col>
            <b-col cols="12"><hr class="divider"></b-col>
            <b-col cols="12">
                <slot/>
            </b-col>
        </b-row>
    </card>
</template>

<script>
    import Card from "../Card";
    export default {
        name: "ServiceCard",
        components: {Card},
        props: {
            iconSrc: String,
            iconAlt: String,
            title: String,
            titleStyle: String
        },
        computed: {
            getTitleStyle: function () {
                return this.titleStyle;
            }
        }
    }
</script>

<style scoped>
    .service-card {
        margin-bottom: 2vh;
    }

    @media (min-width: 992px) {
        .service-card {
            height: 100%;
        }
    }

    .name {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 10px;
    }

    .icon {
        height: 30px;
        width: auto;
    }

    .divider {
        height: 5px;
        margin: 8px 0;
    }
</style>
