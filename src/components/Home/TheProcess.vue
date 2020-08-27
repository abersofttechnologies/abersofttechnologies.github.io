<template>
    <div>
        <b-container class="default">
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">lightbulb_outline</i></b-col>
                            <b-col cols="10">Idé</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">people_outline</i></b-col>
                            <b-col cols="10">Konsultation</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">developer_board</i></b-col>
                            <b-col cols="10">Mockup</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">done_all</i></b-col>
                            <b-col cols="10">Uppföljning</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">developer_mode</i></b-col>
                            <b-col cols="10">Utveckling</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">replay</i></b-col>
                            <b-col cols="10">Revision</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">exit_to_app</i></b-col>
                            <b-col cols="10">Leverans</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
            <b-row class="item">
                <b-col cols="12" v-scroll-reveal>
                    <card>
                        <b-row align-v="center">
                            <b-col cols="1"><i class="material-icons">settings_backup_restore</i></b-col>
                            <b-col cols="10">Underhåll</b-col>
                        </b-row>
                    </card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Card from "../Card";
    export default {
        name: "TheProcess",
        components: {Card}
    }
</script>

<style scoped>
    card {
        width: 100%;
    }

    .default {
        font-weight: 600;
    }

    .item {
        margin-top: 3px;
        margin-bottom: 3px;
        color: #0089F7;
    }

    .material-icons {
        margin-top: 0.25rem;
    }
</style>
