<template>
    <b-container>
        <b-row>
            <b-col lg="12">
                <h3><b>Besök oss:</b></h3>
            </b-col>
            <b-col md="6" style="margin-bottom: 4vh">
                <b-row>
                    <b-col md="12">
                        <maps-view
                                place-id="place_id:EixTdG9yYSBNYXJrbmFkc3bDpGdlbiA5LCAxODMgMzQgVMOkYnksIFN3ZWRlbiIwEi4KFAoSCbUbNjmUm19GET0koYg0qNdtEAkqFAoSCUFQ4n69m19GEWYLkdKAQCDj"
                                :api-key="GOOGLE_MAPS_API_KEY"/>
                    </b-col>
                    <b-col md="12">
                        <b>Stora Marknadsvägen 9</b><br>
                        183 34 Täby<br>
                        Stockholm, Sverige
                        <b-row>
                            <b-col cols="1">
                                <i class="material-icons">email</i>
                            </b-col>
                            <b-col cols="8">
                                <a href="mailto:info@abersoft.se">info@abersoft.se</a>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="6">
                <b-row>
                    <b-col md="12">
                        <maps-view
                                place-id="place_id:ChIJWWNWXQ4yMTARanHgUiJ8y8U"
                                :api-key="GOOGLE_MAPS_API_KEY"/>
                    </b-col>
                    <b-col md="12">
                        <b>Jl. K.L. Yos Sudarso</b><br>
                        Kompleks Brayan Prima Blok E No. 15<br>
                        Medan, Indonesia
                        <b-row>
                            <b-col cols="1">
                                <i class="material-icons">email</i>
                            </b-col>
                            <b-col cols="8">
                                <a href="mailto:info@abersoft.se">info@abersoft.se</a>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import MapsView from "./MapsView";
    export default {
        name: "OfficeLocation",
        components: {MapsView},
        data: function () {
            return {
                GOOGLE_MAPS_API_KEY: 'AIzaSyB94gyGWLzawE4vQkRhiHhjfFGrmNcnhyY'
            };
        },
    }
</script>

<style scoped>

</style>
