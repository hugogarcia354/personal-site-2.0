<template>
  <div class="body">
    <h1>Contact Information</h1>
    <div class="description">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.

    </div>
    <div class="contact">
     <button class="contactButton" v-on:click="email"><span>Contact Me! <font-awesome-icon icon="envelope" spin ></font-awesome-icon></span></button>
   </div>
   <br>
   <div class="linkedIn">
     <button class="linkedInButton" v-on:click="linkedIn"><span>LinkedIn <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"></font-awesome-icon></span></button>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope)
library.add(faLinkedin)
export default {
  methods: {
    email: function(event) {
      window.open('mailto:hugogarcia354@gmail.com');
    },
    linkedIn: function(event) {
      window.open('https://www.linkedin.com/in/hugo-garcia-a936b6b0/');
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
  width: 15%;
}

.contactButton:hover{
  /* background-color:darkslategrey; */
  border:2px solid darkslategray;
  /* color:blue; */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.644);
  font-size: 18pt;
}
.linkedInButton{
  background-color:darkslategrey;
  border:none;
  color:white;
  padding: 15px 30px;
  font-size: 16pt;
  border-radius: 12px;
  cursor: pointer;
  width: 15%;
}
.linkedInButton:hover{
  /* background-color:darkslategrey; */
  border:2px solid darkslategray;
  /* color:blue; */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.644);
  font-size: 18pt;
}
.body{
  color: lightblue;
}
</style>
