<template>
    <div>
        <section>
            <hero
                    style="padding-top: 100px"
                    :hero-image="require('../assets/about-abersoft.png')"
                    hero-alt="Abersoft"
            >
                <h1>Mer information om <span class="blue">Abersoft</span>.</h1>
                <p class="subtitle">Möt teamet bakom Abersoft.</p>
                <b-button class="default-button" href="#the-people">Läs mer</b-button>
            </hero>
        </section>

        <section>
            <div class="article" style="margin-top: 4vh;">
            <b-container>

                <!--        Profile section-->
                <a class="anchor" id="the-people"/>
                <b-row>
                    <b-col lg="12" style="padding-bottom: 2vh">
                        <h3 class="subtitle" style="font-size: 1.4rem">Vilka är vi?</h3>
                    </b-col>
                    <b-col md="3" offset-md="1" v-scroll-reveal="{ delay:50 }">
                        <profile :profile-image="require('../assets/profiles/johan.png')">
                            <div class="name">Johan Hellberg</div>
                            <div class="position">Chief Executive Officer</div>
                        </profile>
                    </b-col>
                    <b-col md="3" offset-md="1" v-scroll-reveal="{ delay:100 }">
                        <profile :profile-image="require('../assets/profiles/isac.png')">
                            <div class="name">Isac Törnberg</div>
                            <div class="position">Chief Technology Officer</div>
                        </profile>
                    </b-col>
                    <b-col md="3" offset-md="1" v-scroll-reveal="{ delay:150 }">
                        <profile :profile-image="require('../assets/profiles/fandi.png')">
                            <div class="name">Cong Fandi</div>
                            <div class="position">Chief Operating Officer</div>
                        </profile>
                    </b-col>
                </b-row>

                <!--        About us section-->
                <b-row style="padding-top: 4vh">
                    <b-col cols="12">
                        <div class="subtitle2">Om oss</div>
                    </b-col>
                    <b-col cols="12" md="5" order-md="3" v-scroll-reveal>
                        <img src="../assets/about/foto1.png" class="img-fluid hero-image" alt="about"/>
                    </b-col>
                    <b-col cols="0" md="1" order-md="2"/>
                    <b-col cols="12" md="6" order-md="1" v-scroll-reveal>
                        <div style="font-weight: 600; padding-top: 2vh">
                            <p>
                                Personerna bakom Abersoft Technologies har senaste sju åren verkat inom startup och
                                mobilapplikation utveckling både i Sverige men också internationellt.<br>
                                <br>
                                Genom vår erfarenhat har vi sett de problem som många stöter på när man vill gå från en
                                idé till verklighet. Man hamnar ofta i en moment 22 situation där det är väldigt dyrt
                                att få fram en MVP men att man utan MVP inte kan få tillgång till kapital.
                            </p>
                        </div>
                    </b-col>
                </b-row>
                <b-row style="padding-top: 4vh">
                    <b-col cols="12" md="5" order-md="1" v-scroll-reveal>
                        <img src="../assets/about/foto2.png" class="img-fluid hero-image" alt="about"/>
                    </b-col>
                    <b-col cols="0" md="1" order-md="2"/>
                    <b-col cols="12" md="6" order-md="3" v-scroll-reveal>
                        <div style="font-weight: 600; padding-top: 2vh">
                            <p>
                                Detta ville vi lösa så vi spenderade över att år på att sätta ihop ett internationellt
                                team med utvecklare och designer för att kunna vara så kostnadseffektiva som möjligt.<br>
                                <br>
                                Till skillnad från andra outsourcing företag har vi projektledare på plats både i
                                Sverige och där vår utveckling sker för att slippa de klassiska problemen som uppstår vid oursourcing.
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        </section>

        <!--    Contact us-->
        <section>
            <hero :hero-image="require('../assets/scene-home.png')"
                  hero-alt="Contact"
                  :variant="2"
                  style="padding-bottom: 40px;">
                <h1 class="white">Redo att jobba med oss?</h1>
                <p class="white subtitle">Har du några funderingar, klicka på knappen och berätta hur vi kan hjälpa dig. Vi ser fram emot att höra mer om er.</p>
                <b-button class="default-button" to="/contact">Kontakta oss</b-button>
            </hero>
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src

    import Profile from "../components/About/Profile";
    import '../assets/css/main.css';
    import NProgress from "nprogress";
    import Hero from "../components/Hero";

    export default {
        name: 'About',
        components: {
            Hero,
            Profile
        },
        methods: {},
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
    @media (max-width: 767px) {
        .white {
            color: #fff !important;
            text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
        }
    }

    .name {
        font-weight: 600;
    }

    .position {
        font-weight: 600;
        font-size: 0.8rem;
    }
</style>
