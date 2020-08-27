<template>
    <div>
        <b-button variant="primary" class="default-button">
            <slot/>
        </b-button>
    </div>
</template>

<script>
    import '../assets/css/main.css';
    export default {
        name: "Button",
        props: {
            disabled: Boolean
        }
    }
</script>

<style scoped>
</style>
