<template>
    <div>
        <b-row>
            <b-col cols="6" style="padding: 1%"
                   v-scroll-reveal="{ delay:50 }">
                <card>
                    <b-row>
                        <b-col cols="12">
                            <img src="@/assets/icons/space.png" alt="mvp" class="icon"/>
                        </b-col>
                        <b-col cols="12">
                            <div class="name">
                                MVP
                            </div>
                        </b-col>
                    </b-row>
                </card>
            </b-col>

            <b-col cols="6" style="padding: 1%"
                   v-scroll-reveal="{ delay:100 }">
                <card>
                    <b-row>
                        <b-col cols="12">
                            <img src="@/assets/icons/apps.png" alt="mvp" class="icon"/>
                        </b-col>
                        <b-col cols="12">
                            <div class="name">
                                Appar
                            </div>
                        </b-col>
                    </b-row>
                </card>
            </b-col>

            <b-col cols="6" style="padding: 1%"
                   v-scroll-reveal="{ delay:150 }">
                <card>
                    <b-row>
                        <b-col cols="12">
                            <img src="@/assets/icons/web.png" alt="mvp" class="icon"/>
                        </b-col>
                        <b-col cols="12">
                            <div class="name">
                                Hemsidor
                            </div>
                        </b-col>
                    </b-row>
                </card>
            </b-col>

            <b-col cols="6" style="padding: 1%"
                   v-scroll-reveal="{ delay:200 }">
                <card>
                    <b-row>
                        <b-col cols="12">
                            <img src="@/assets/icons/software.png" alt="mvp" class="icon"/>
                        </b-col>
                        <b-col cols="12">
                            <div class="name">
                                Mjukvara
                            </div>
                        </b-col>
                    </b-row>
                </card>
            </b-col>

        </b-row>
    </div>
</template>

<script>
    import Card from "../Card";
    export default {
        name: "Services",
        components: {Card}
    }
</script>

<style scoped>
    .name {
        font-size: 1.3rem;
        font-weight: 600;
        margin-top: 8px;
    }

    .icon {
        height: 30px;
        width: auto;
    }
</style>
