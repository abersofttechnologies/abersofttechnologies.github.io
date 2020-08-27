<template>
    <div>
        <!--    Hero -->
        <hero style="padding-top: 100px"
              :hero-image="require('../assets/hero.png')"
              hero-alt="Abersoft">
            <h1>Skapa något <span class="blue">fantastiskt</span>.</h1>
            <p class="subtitle">MVPs, Appar, Hemsidor & Mjukvara, inga problem, vi fixar det.</p>
            <b-button class="default-button" href="#services">Läs mer</b-button>
        </hero>

        <!--    Content-->
        <a class="anchor" id="services"/>
        <b-container style="margin-top: 4vh; margin-bottom: 4vh">
            <b-row align-v="center">
                <b-col md="5" order-md="3" style="margin: 4%" v-scroll-reveal>
                    <the-services/>
                </b-col>
                <b-col md="1" order-md="2">
                </b-col>
                <b-col md="5" order-md="1" v-scroll-reveal>
                    <div class="content">
                        <div class="subtitle2">
                            Vilka är vi?
                        </div>
                        <div style="font-weight: 600; padding-top: 2vh; font-size: 1.2rem">
                            <p>
                                Vi hjälper dig att utveckla din MVP, App eller Hemsida på ett smidigt, snabbt och
                                kostnadseffektivt sätt.
                            </p>
                        </div>
                        <b-button class="default-button" to="/about">Läs mer</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <!--Process-->
        <a class="anchor" id="process"/>
        <div class="hero-bg3">
            <b-container style="padding-top: 4vh; padding-bottom: 4vh">
                <b-row align-v="center">
                    <b-col md="5" order-md="1" style="margin: 4%" v-scroll-reveal>
                        <the-process/>
                    </b-col>
                    <b-col md="1" order-md="2">
                    </b-col>
                    <b-col md="5" order-md="3" v-scroll-reveal>
                        <div class="content">
                            <div class="white subtitle2">
                                Vår process
                            </div>
                            <div class="white" style="font-weight: 600; padding-top: 2vh; font-size: 1.2rem">
                                <p>
                                    Vi är ett internationellt team med projektledare i Sverige som har mer än sju års
                                    erfarenhet av mjukvaruutveckling.
                                </p>
                            </div>
                            <b-button class="default-button" to="/services">Läs mer</b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import TheServices from "../components/Home/TheServices";
    import TheProcess from "../components/Home/TheProcess";
    import NProgress from 'nprogress';
    import Hero from "../components/Hero";

    export default {
        name: 'Home',
        components: {
            Hero,
            TheProcess,
            TheServices
        },
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

<style>
    .content {
        text-align: center;
    }

    @media (min-width: 768px) {
        .content {
            text-align: start;
        }
    }

    @media (max-width: 767px) {
        .white {
            color: #fff !important;
            text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
        }
    }
</style>
