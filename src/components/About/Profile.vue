<template>
    <div>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div style="text-align: center;">
                        <img class="profile img-fluid" :src="profileImage" alt="profile">
                    </div>
                </b-col>
                <b-col cols="12">
                    <div style="text-align: center;">
                        <slot/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        props: ['profileImage']
    }
</script>

<style scoped>
    .profile {
        width: 60%;
        padding: 8%;
        border-radius: 50%;
    }
    @media (min-width: 768px) {
        .profile {
            width: 100%;
            padding: 8%;
        }
    }
</style>
