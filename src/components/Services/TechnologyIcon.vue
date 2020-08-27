<template>
    <div :hoverable="false" class="technology-card">
        <div style="display: flex; width: 100%; flex-direction: column; align-items: center;" class="small">
            <div class="icon-container"><img :src="iconSrc" :alt="iconAlt" class="icon"/></div>
            <div style="text-align: center"><slot/></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TechnologyCard",
        components: {},
        props: {
            iconSrc: String,
            iconAlt: String
        }
    }
</script>

<style scoped>
    .technology-card {
        margin: 0;
        padding: 5px;
        border-radius: 5px !important;
        min-height: 80px;
    }

    .icon {
        vertical-align: middle;
        margin: auto 0;
        max-height: 40px;
        max-width: 40px;
        padding: 2px;
    }

    .icon-container {
        height: 40px;
        white-space: nowrap;
        text-align: center;
    }

    .icon-container:before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
</style>
