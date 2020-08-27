<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="location col-md-6">
                    <div class="row text-center text-md-left">
                        <div class="col-md" v-scroll-reveal="{ delay:50 }">
                            <location-address title="Sverige">
                                Stora Marknadsvägen 9<br>
                                183 34 Täby<br>
                                Stockholm, Sverige
                            </location-address>
                        </div>
                        <div class="col-md" v-scroll-reveal="{ delay:100 }">
                            <location-address title="Indonesia">
                                Jl. K.L. Yos Sudarso<br>
                                Kompleks Brayan Prima Blok E No. 15<br>
                                Medan, Indonesia
                            </location-address>
                        </div>
                    </div>
                </div>
                <div class="copyright col-md-6" v-scroll-reveal="{ delay:150 }">
                    <div class="float-md-right d-flex flex-column align-items-md-end align-items-center">
                        <img class="logo p-2" src="@/assets/abersoft_alt.png" alt="logo"/>
                        <span class="p-2">&copy; 2020 Abersoft Technologies AB.</span>
                        <div class="pr-2"><router-link to="/privacy-policy">Villkor</router-link>.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import LocationAddress from "./LocationAddress";
    export default {
        name: "TheFooter",
        components: {LocationAddress}
    }
</script>

<style scoped>
    footer {
        background: #F4F4F4;
        padding: 2.5% 7.5%;
    }

    .copyright {
        font-weight: 600;
        font-size: 0.85rem;
    }

    .logo {
        display: block;
        width: 40%;
        object-fit: contain;
    }

    .location {
        align-items: center;
    }

    .col-md {
        margin-bottom: 2.5vh;
        margin-top: 2.5vh;
    }

    @media (min-width: 768px) {
        .col-md {
            margin: 0;
        }

        .logo {
            width: 60%;
        }
    }

</style>
