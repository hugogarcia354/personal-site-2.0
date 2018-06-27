<template>
  <nav id="navBar" class="level is-transparent">
    <p class="level-item has-text-centered">
        <a class="button">
          <router-link to="/" class="link">Home</router-link>
        </a>
    </p>
    <div class="separator"/>
    <p class="level-item has-text-centered">
        <a class="button">
          <router-link to="/projects" class="link">Projects</router-link>
        </a>
    </p>
    <div class="separator"/>
    <p class="level-item has-text-centered">
        <a class="button">
          <router-link to="/contact" class="link">Contact Me</router-link>
        </a>
    </p>
  </nav>
</template>

<style scoped>
#navBar{
  background-color: darkblue;
  margin-bottom: 0%;
}
.button{
  background-color: darkblue;
  border:none;
  height: 75px;
  width: 100%;
}
.button:hover{
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
}
.link:hover{
  color:aqua;
}
@media screen and (max-width: 600px) {
.button{
    height: 25%;
}
.separator{
  height: 25%;
}
}
</style>

