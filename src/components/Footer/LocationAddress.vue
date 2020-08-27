<template>
    <div class="location-container">
        <div class="location-name">{{ title }}</div>
        <div class="address-text"><p><slot/></p></div>
    </div>
</template>

<script>
    export default {
        name: "LocationAddress",
        props: ['title']
    }
</script>

<style scoped>
    .location-container {
        display: flex;
        flex-direction: column;
    }

    .location-name {
        font-weight: 700;
    }

    .address-text {
        font-weight: 600;
        font-size: 0.75rem;
    }

    .address-text p {
        margin: 0;
    }
</style>
