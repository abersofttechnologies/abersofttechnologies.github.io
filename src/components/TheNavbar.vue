<template>
    <div>
        <b-navbar id="header" toggleable="md" type="light" fixed="top">
            <b-navbar-brand to="/"><img src="../assets/logo.svg" class="logo" alt="logo"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item class="nav-item" v-bind:active-class="$route.path === '/' ? 'active' : ''" to="/">Hem</b-nav-item>
                    <b-nav-item class="nav-item" active-class="active" to="/services">Tjänster</b-nav-item>
                    <b-nav-item class="nav-item" active-class="active" to="/about">Om oss</b-nav-item>
                    <b-nav-item class="nav-item" active-class="active" to="/contact">Kontakta</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "TheNavbar",
        mounted() {
            $(window).scroll(function() {
                var y = $(window).scrollTop();
                if (y > 0) {
                    $("#header").addClass('--not-top');
                } else {
                    $("#header").removeClass('--not-top');
                }
            });
        }
    }
</script>

<style scoped>
    .logo {
        padding: 15px;
        width: 150px;
    }

    .nav-item {
        font-weight: 600;
        font-size: 0.9rem;
    }

    .active {
        color: #0089F7 !important;
    }

    .navbar-nav > li{
        padding-left:10px;
        padding-right:10px;
    }

    .navbar {
        transition: all 0.25s ease-out 0s;
        background: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        z-index: 99;
    }

    @media (min-width: 768px) {
        .navbar {
            transition: all 0.25s ease-out 0s;
            background: transparent;
            box-shadow: none;
            z-index: 99;
        }
    }

    .navbar.--not-top {
        transition: all 0.25s ease-out 0s;
        background: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }

</style>
