<template>
    <div>
        <iframe width="100%" height="300" style="border:0"
                :src="'https://www.google.com/maps/embed/v1/place?q=' + placeId + '&key=' + apiKey"
                allowfullscreen>
        </iframe>
    </div>
</template>

<script>
    export default {
        name: "MapsView",
        props: {
            placeId: String,
            apiKey: String
        }
    }
</script>

<style scoped>

</style>
