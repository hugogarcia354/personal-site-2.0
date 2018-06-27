<template>
  <div id="app">
    <default-layout/>
    <router-view/>
  </div>
</template>

<script>
import DefaultLayout from './layouts/Default'
export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
}
html {
    height: 100%;
}

</style>
