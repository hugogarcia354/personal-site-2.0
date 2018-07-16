<template>
  <nav id="navBar" class="level is-transparent">
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
.link{
  color:white;
  font-size: 100%;
}
.link:hover{
  color:aqua;
}
@media screen and (max-width: 600px) {
#button{
    height: 25%;
}
.separator{
  height: 25%;
}
}
</style>

