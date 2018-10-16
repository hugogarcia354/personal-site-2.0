<template>
  <div class="body">
    <h1>I don't know what you typed but it sure does not exist!</h1>
    <h1>Try clicking on one of the links above to get to the place you wish to get to.</h1>
     <img src="/static/images/lost.gif" />
    <br><br><br>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
h1{
  font-size: 30px;
  text-shadow:  0 5px 15px lightblue;
}
.body{
  color: lightblue;
}

@media only screen and (max-device-width: 1366px) {

}  
</style>