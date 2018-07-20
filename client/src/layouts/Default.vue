<template>
  <nav  id="navBar" class="level is-transparent">
    <a class = "icon" v-on:click="hamburger">&#9776;</a>
     <div class="HamburgerSeparator"/>
    <p class="level-item has-text-centered">
      <router-link tag="button" id="button" to="/" class="link"> <font-awesome-icon icon="home"></font-awesome-icon> Home</router-link>
    </p>
    <div class="separator"/>
    <p class="level-item has-text-centered">
      <router-link tag="button" id="button" to="/projects" class="link"><font-awesome-icon icon="folder-open"></font-awesome-icon> Projects</router-link>
    </p>
    <div class="separator"/>
    <p class="level-item has-text-centered">
      <router-link tag="button" id="button" to="/contact" class="link"><font-awesome-icon icon="address-card"></font-awesome-icon> Contact Me</router-link>
    </p>
  </nav>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHome, faFolderOpen, faAddressCard} from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faFolderOpen, faAddressCard)
export default {
  methods:{
    hamburger: function () {
      var x;
      if ((x = document.getElementById("navBar")) != null){
         x.id += "Responsive"
      }
      else {
        x = document.getElementById("navBarResponsive");
        x.id = "navBar";
      }
    }
  }
}
</script>

<style scoped>

#navBar{
  background-color: darkblue;
  margin-bottom: 0%;
}
#button{
  background-color: darkblue;
  border:none;
  height: 75px;
  width: 100%;
}

#button:hover {
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  color:aqua;
  background-color: blue;
}
.separator{
   width: 1px;
   height: 75px;
   background-color:lightseagreen;
   margin: 0 auto;
}
.HamburgerSeparator{
   display: none;
   width: 1px;
   height: 75px;
   background-color:lightseagreen;
   margin: 0 auto;
}
.link{
  color:white;
  font-size: 100%;
}
.link:hover{
  color:aqua;
}

.icon {
  display: none;
}
.level-item{
  margin-bottom: 0%;
}
/* Necessary to hide menu but display hamburger icon */
@media screen and (max-width: 768px) {
  #navBar :not(:first-child) {
    display: none;
  }

  #navBar .icon {
    float: center;
    display: block;
    font-size: 25pt;
    color: white;
    background-color: darkblue;
    border:none;
    height: 70px;
    width: 100%;
    text-align: center;
    line-height: 2em;
  }
  .separator{
    height: 1px;
    width: 100%;
    background-color: lightblue;
  }
}

@media screen and (max-width: 768px) {
 /* Display responsive menu */
  #navBarResponsive{
    position:relative;
  }
   #navBarResponsive .icon {
    float: center;
    display: block;
    font-size: 25pt;
    color: white;
    background-color: darkblue;
    border:none;
    height: 70px;
    width: 100%;
    text-align: center;
    line-height: 2em;
  }
  .HamburgerSeparator{
    display: block;
    height: 1px;
    width: 100%;
    background-color: lightblue;
  }
  #Button{
    height: 100%;
  }

  .level-item{
    margin-bottom: 0%;
  }
}
</style>

