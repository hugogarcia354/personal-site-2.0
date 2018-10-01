<template>
  <div class="body">
    <h1>Contact Me</h1>
    <div class="description">
      If interested in working with me, please fill in the following form
    </div>
    <div class="contactForm">
      <label class="form-label" for="name" required="required">Name: </label>
      <br>
      <input class="form-input" v-model="name" required="required" />
      <br>
      <label class="form-label" for="email">Email: </label>
      <br>
      <input class="form-input" type = "email" v-model="emailAddress"/>
      <br>
      <label class="form-label" for="message">Message: </label>
      <br>
      <textarea rows="10" class="messageInput" v-model="message"/>
    </div>
    <div class="contact">
     <button class="contactButton" v-on:click="email" :disabled=hideButton> <span> Send Message <font-awesome-icon icon="envelope" ></font-awesome-icon></span></button>
     <button class="contactButtonDisabled" :disabled=!hideButton> <span> Fill in Form <font-awesome-icon icon="envelope" ></font-awesome-icon></span></button>
   </div>
   <br>
      <br><br><br>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope)
export default {
  data () {
    return {
      name: '',
      emailAddress: '',
      message: '',
    }
  },
  computed: {
    hideButton: function() {
      if (this.name == '' || this.emailAddress == '' || this.message == '') {
        return true;
      }
      else  {
        return false;
     }
    }
  },
  methods: {
    email: function(event) {
      var emailBody = "Name: " + this.name +"\n\rEmail: " + this.emailAddress + "\n\rMessage: " + this.message;
      emailBody = encodeURIComponent(emailBody);
      window.open('mailto:hugogarcia354@gmail.com?subject=Correspondance&body=' + emailBody);
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 30px;
  text-shadow:  0 5px 15px lightblue;
}
.contactButton{
  background-color:darkslategrey;
  border:none;
  color:white;
  padding: 15px 30px;
  font-size: 16pt;
  border-radius: 12px;
  cursor: pointer;
  width: 250px;
}

.contactButton:disabled{
  display: none;
  background-color:darkslategrey;
  border:none;
  color:white;
  padding: 15px 30px;
  font-size: 16pt;
  border-radius: 12px;
  cursor: pointer;
  width: 250px;
}
.contactButtonDisabled{
  background-color:grey;
  border:none;
  color:white;
  padding: 15px 30px;
  font-size: 16pt;
  border-radius: 12px;
  cursor: pointer;
  width: 250px;
}

.contactButtonDisabled:disabled{
  display: none;
  background-color:darkslategrey;
  border:none;
  color:white;
  padding: 15px 30px;
  font-size: 16pt;
  border-radius: 12px;
  cursor: pointer;
  width: 250px;
}
textarea {
  width: 100%;
}
.contactButton:hover{
  /* background-color:darkslategrey; */
  border:2px solid darkslategray;
  /* color:blue; */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.644);
  font-size: 18pt;
}

.body{
  color: lightblue;
}

.contactForm{
  display:block;
  margin:auto;
  width: 50%;
  padding: 0 5% ;
  text-align: left;
}

@media only screen and (max-device-width: 1366px) {
    .linkedInButton, .contactButton {
        width: 75%;
    }
}  
</style>
