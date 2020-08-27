<template>
    <div>
        <!--    Contact us-->
        <hero :hero-image="require('../assets/scene-home.png')"
              hero-alt="Contact"
              :variant="1"
              style="padding-top: 100px;">
            <h1>Redo att jobba med oss?</h1>
            <p class="subtitle">Har du några funderingar, klicka på knappen och berätta hur vi kan hjälpa dig. Vi ser fram emot att höra mer om er.</p>
            <b-button class="default-button" href="#contact-form">Kontakta oss</b-button>
        </hero>

        <!--        Contact form-->
        <a class="anchor" id="contact-form"/>
        <div style="padding-top:4vh; padding-bottom: 4vh">
            <b-container>
                <b-row>
                    <b-col lg="5" v-scroll-reveal>
                        <contact-form style="margin-bottom: 4vh"/>
                    </b-col>
                    <b-col lg="7" v-scroll-reveal>
                        <office-location/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import NProgress from "nprogress";
    import Hero from "../components/Hero";
    import ContactForm from "../components/Contact/ContactForm";
    import OfficeLocation from "../components/Contact/OfficeLocation";

    export default {
        name: "Contact",
        components: {OfficeLocation, ContactForm, Hero},
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
    .label {
        font-weight: 600;
    }

    @media (max-width: 991px) {
        .contact-card {
            margin-bottom: 4vh;
        }
    }
</style>
