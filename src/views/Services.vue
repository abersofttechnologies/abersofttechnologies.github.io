<template>
    <div>
        <!--    Services-->
        <hero style="padding-top: 100px"
              :hero-image="require('../assets/services.png')"
              hero-alt="Services">
            <h1>Vi gör dina ideér till <span class="blue">verklighet</span>.</h1>
            <p class="subtitle">
                Skapa innovativa produkter så du kan nå dina kunder som är mer digitala än någonsin.
            </p>
            <b-button class="default-button" href="#our-services">Våra tjänster</b-button>
        </hero>

<!--        Our services -->
        <a class="anchor" id="our-services"/>
        <div style="padding-top:4vh; padding-bottom: 4vh">
            <b-container>
                <b-row>
                    <b-col lg="4" v-scroll-reveal="{ delay:50 }">
                        <service-card
                                :icon-src="require('../assets/icons/apps.png')"
                                icon-alt="apps"
                                title="Apputveckling"
                                title-style="color: #D775B0">
                            <p>
                                Fler och fler väljer idag att utveckla en egen app,
                                allt från startups till etablerade företag. Vi jobbar
                                ständigt med att göra den processen så smidig och kostnadseffektiv
                                som möjligt för dig.
                            </p>

                            <p class="sub-article">
                                <b>Vad vi kan:</b>
                                <b-row>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/apple.png')" icon-alt="iOS">iOS Swift</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/android.png')" icon-alt="Android">Android Java</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/kotlin.png')" icon-alt="Android Kotlin">Android Kotlin</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/flutter.png')" icon-alt="Flutter">Flutter</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/react.png')" icon-alt="React Native">React Native</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/ionic.png')" icon-alt="Ionic">Ionic</technology-icon>
                                    </b-col>
                                </b-row>
                            </p>
                        </service-card>
                    </b-col>
                    <b-col lg="4" v-scroll-reveal="{ delay:100 }">
                        <service-card
                                :icon-src="require('../assets/icons/web.png')"
                                icon-alt="web"
                                title="Webbutveckling"
                                title-style="color: #65A699">

                            <p>
                                Att ha en egen webbsida har länge varit ett måste för många
                                företag för att hitta kunder och profilera sig. Trotts detta
                                är det många som i dagsläget inte har snygga och välfungerande
                                hemsidor. Där kan vi hjälpa dig.
                            </p>

                            <p class="sub-article">
                                <b>Vad vi kan:</b>
                                <b-row>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/html5.png')" icon-alt="HTML 5">HTML 5</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/css3.png')" icon-alt="CSS 3">CSS 3</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/javascript.png')" icon-alt="JavaScript">JavaScript</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/react.png')" icon-alt="ReactJS">ReactJS</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Vue.png')" icon-alt="Vue.js">Vue.js</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Angularjs.png')" icon-alt="AngularJS">AngularJS</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Bootstrap.png')" icon-alt="Bootstrap">Bootstrap</technology-icon>
                                    </b-col>
                                </b-row>
                            </p>
                        </service-card>
                    </b-col>
                    <b-col lg="4" v-scroll-reveal="{ delay:150 }">
                        <service-card
                                :icon-src="require('../assets/icons/software.png')"
                                icon-alt="software"
                                title="Mjukvaruutveckling"
                                title-style="color: #F2995F">

                            <p>
                                Ibland vill man varken ha en App eller en Hemsida, utan behöver
                                helt enkelt ett skräddarsytt program eller system som skall fungera
                                på MacOS eller PC. Vi har stor erfarenhet att bygga skräddarsydd
                                programvara till dig.
                            </p>

                            <p class="sub-article">
                                <b>Vad vi kan:</b>
                                <b-row>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Wordpress.png')" icon-alt="Wordpress">Wordpress</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Woocommerce.png')" icon-alt="Woocommerce">Woocommerce</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Mysql.png')" icon-alt="MySQL">MySQL</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Mongodb.png')" icon-alt="MongoDB">MongoDB</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Redis.png')" icon-alt="Redis">Redis</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Nodejs.png')" icon-alt="Node.js">Node.js</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Php.png')" icon-alt="PHP">PHP</technology-icon>
                                    </b-col>
                                    <b-col cols="3" md="2" lg="4" xl="3">
                                        <technology-icon :icon-src="require('@/assets/icons/Electron.png')" icon-alt="Electron">Electron</technology-icon>
                                    </b-col>
                                </b-row>
                            </p>
                        </service-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!--    Contact us-->
        <hero :hero-image="require('@/assets/scene-home.png')"
              hero-alt="Contact"
              :variant="2"
              style="padding-bottom: 40px;">
            <h1 class="white">Redo att jobba med oss?</h1>
            <p class="white subtitle">Har du några funderingar, klicka på knappen och berätta hur vi kan hjälpa dig. Vi ser fram emot att höra mer om er.</p>
            <b-button class="default-button" to="/contact">Kontakta oss</b-button>
        </hero>
    </div>
</template>

<script>
    import NProgress from "nprogress";
    import Hero from "../components/Hero";
    import ServiceCard from "../components/Services/ServiceCard";
    import TechnologyIcon from "../components/Services/TechnologyIcon";

    export default {
        name: "Services",
        components: {TechnologyIcon, ServiceCard, Hero},
        created() {
            NProgress.start()
        },
        mounted() {
            this.$nextTick(function () {
                NProgress.done()
            })
        },
        data: function () {
            return {

            }
        }
    }
</script>

<style scoped>
    .sub-article {
        font-size: 0.8rem;
    }

    @media (max-width: 767px) {
        .white {
            color: #fff !important;
            text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
        }
    }
</style>
