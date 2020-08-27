<template>
    <div>
        <!--    Not found -->
        <hero :hero-image="require('../assets/scene-plants.png')"
              hero-alt="Contact"
              :variant="1"
              style="padding-top: 100px;">
            <h1>Hej kompis! Du verkar förlorad.</h1>
            <p class="subtitle">Tyvärr, men vi kan inte hitta den sida du letar efter.</p>
            <b-button class="default-button" to="/">Gå till hemsidan</b-button>
        </hero>
    </div>
</template>

<script>
    import NProgress from "nprogress";
    import Hero from "../components/Hero";

    export default {
        name: "Contact",
        components: {Hero},
        created() {
            NProgress.start()
        },
        mounted() {
            this.$nextTick(function () {
                NProgress.done()
            })
        }
    }
</script>

<style scoped>

</style>
