<template>
    <div :class="getClass">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            disabled: Boolean,
            clickable: Boolean,
            hoverable: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            getClass () {
                let cardClass = 'card';
                if (this.disabled) cardClass += ' disabled';
                else if (this.clickable) cardClass += ' clickable';

                if (this.hoverable) cardClass += ' hoverable';

                return cardClass;
            }
        }
    };
</script>

<style scoped>
    .card {
        background-color: #FFF;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        padding: 18px;
        border: none;
    }

    .hoverable:hover {
        animation-name: float;
        animation-iteration-count: 1;
        animation-duration: 200ms;
        animation-fill-mode: forwards;
    }

    .hoverable:not(:hover) {
        animation-name: sink;
        animation-iteration-count: 1;
        animation-duration: 200ms;
        animation-fill-mode: forwards;
    }

    .disabled {
        background-color: #F4F4F4;
        animation: none;
    }

    .disabled:active {
        animation: none;
    }

    .clickable {
        animation-name: up;
        animation-iteration-count: 1;
        animation-duration: 100ms;
        animation-fill-mode: forwards;
    }

    .clickable:active {
        animation-name: down;
        animation-iteration-count: 1;
        animation-duration: 50ms;
        animation-fill-mode: forwards;
    }

    @keyframes down {
        0% {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            transform: translateY(0);
        }
        100% {
            box-shadow: none;
            transform: translateY(2px);
        }
    }

    @keyframes up {
        0% {
            box-shadow: none;
            transform: translateY(2px);
        }
        100% {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            transform: translateY(0);
        }
    }

    @keyframes float {
        0% {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            transform: translateY(0);
        }
        100% {
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
            transform: translateY(-4px);
        }
    }

    @keyframes sink {
        0% {
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
            transform: translateY(-4px);
        }
        100% {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            transform: translateY(0);
        }
    }
</style>
