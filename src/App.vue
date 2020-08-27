<template>
  <div id="app">
    <the-navbar/>
    <vue-page-transition name="fade-in-up">
      <router-view/>
    </vue-page-transition>
    <the-footer/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  body {
    margin: 0;
  }

  #app {
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #707070;
    background-repeat: repeat-y;
    background-size: 100% auto;
    background-position: center;
  }

  h1 {
    font-weight: bold !important;
  }

  html {
    scroll-behavior: smooth;
  }
</style>
<script>
  import TheFooter from "./components/Footer/TheFooter";
  import TheNavbar from "./components/TheNavbar";
  export default {
    components: {TheNavbar, TheFooter}
  }
</script>
