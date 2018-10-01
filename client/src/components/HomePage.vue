<template>
 <div class="body">
   <div class="topParallax"/>
   <div class="title">
     <h1>Hugo Garcia</h1>
     <h2>Freelance Developer</h2>
   </div>
   <div class="topBody">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.

    </div>

   <div class="education">
     <br>
     <h3>Education</h3>
     <div class="longbeach" v-on:click="redirect('https://www.csulb.edu/')"/>
     <div class="bottomBody">
       <h4>2016-2018 <br>Bachelor of Science in Computer Science</h4>
       Located in Long Beach, California, CSULB has repeatedly ranked as one of the Top 50 Undergraduate programs in the nation according to <a href = "https://www.usnews.com/best-colleges/california-state-university-long-beach-1139/overall-rankings"> US News Best Colleges.</a> During my time at CSULB...
   </div>
   <br>
     <h3>Honor Societies and Clubs</h3>
     <div class="societies">
       <div class="columnBody">
        <div class="column">
          <div class="tbp" v-on:click="redirect('https://www.tbpcatheta.org/')"/>
        Tau Beta Pi is the only engineering honor society representing the entire engineering profession. It is the nation's second-oldest honor society, founded at Lehigh University in 1885 to mark in a fitting manner those who have conferred honor upon their Alma Mater by distinguished scholarship and exemplary character as students in engineering, or by their attainments as alumni in the field of engineering, and to foster a spirit of liberal culture in engineering colleges.  
        </div>
        <div class = "column">
          <div class="hkn" v-on:click="redirect('http://www.csulbhkn.org/')"/>
          Eta Kappa Nu (ΗΚΝ) or IEEE-HKN is the international honor society of the Institute of Electrical and Electronics Engineers (IEEE). The organization promotes excellence in the profession and in education through an emphasis on scholarship, character, and attitude. Membership is a lifelong designation for individuals who have distinguished themselves as students or as professionals in electrical engineering, computer engineering, computer science, and other fields of IEEE interest.
        </div>
        <div class = "column">
          <div class="acm" v-on:click="redirect('http://csulb.acm.org/#!/')"/>
          The Association for Computing Machinery is an international learned society for computing. It was founded in 1947, and is the world's largest scientific and educational computing society.
        </div>
      </div>
     </div>
   </div>
   <div class="social">
     <h3>Social Media</h3>
      <div class="linkedIn">
     <button class="linkedInButton" v-on:click="linkedIn"><span>LinkedIn <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"></font-awesome-icon></span></button>
   </div>
   </div>
   <br><br><br>
 </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin)
export default {
  data () {
    return{
    }
  },
  methods: {
    redirect: function(url) {
      window.open(url);
    },
     linkedIn: function(event) {
      window.open('https://www.linkedin.com/in/hugo-garcia-a936b6b0/');
    }
  }
  
}
</script>


<style scoped>
.topParallax{
  margin-top: 0%;
  /*set image*/
  background-image: url(/static/images/codeScreen.jpg);
  /* Set a specific height */
  height: 350px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.longbeach{
  margin-top: 0%;
  /*set image*/
  background-image: url(/static/images/longbeach.png);
  /* Set a specific height */
  height: 350px;

  /* Create the parallax scrolling effect */
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;

}
.columnBody{
  display: flex;
}
.column{
  flex: 50%;
}

.tbp{
  margin-left: 25%;
  margin-top: 0%;
  background-color: rgb(225,224,225);
  /*set image*/
  background-image: url(/static/images/tbplogo.png);
  /* Set a specific height */
  height: 250px;
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.hkn{
  margin-left: 25%;
  margin-top: 0%;
  /*set image*/
  background-image: url(/static/images/Eta_Kappa_Nu_shield.png);
  /* Set a specific height */
  height: 250px;
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.acm{
   margin-left: 25%;
  margin-top: 0%;
  /*set image*/
  background-image: url(/static/images/acm.jpg);
  /* Set a specific height */
  height: 250px;
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.body{
  color: lightblue;
}

h1{
  font-size: 65px;
  color:silver;
  text-shadow:  0 5px 15px lightblue;
  /* border-bottom: 1.5px solid lightblue; */
  border-top: 1.5px Solid lightblue;
}
h2{
  /* font-size: 65px; */
  color:silver;
  /* text-shadow:  0 5px 15px lightblue; */
  border-bottom: 1.5px dashed lightblue;
  /*border-top: 1.5px Solid lightblue; */
}

h3{
  font-size: 30px;
  color:silver;
  /* text-shadow:  0 5px 15px lightblue; */
  /* border-bottom: 1.5px dashed lightblue; */
  border-top: 1.5px dashed lightblue;
}
h4{
  font-size: 25px;
  color:silver;
}
.title{
  color:lightblue;
}

 /* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
@media screen and (max-width: 768px) {
    .topParallax{
      background-attachment:none;
      background-size: 250% 100%;
    }
    .longbeach {
      background-size: 100%; 
      background-attachment: scroll;
    }
    .columnBody{
      display: block;
    }
    .tbp{
      margin-left: 15%;
      width: 70%;
    }
    .hkn{
      margin-left: 15%;
      width: 70%;
    }

    .acm{
      margin-left: 15%;
      width: 70%;
    }
} 

.linkedInButton{
  background-color:darkslategrey;
  border:none;
  color:white;
  padding: 15px 30px;
  font-size: 16pt;
  border-radius: 12px;
  cursor: pointer;
  width: 250px;
}
.linkedInButton:hover{
  /* background-color:darkslategrey; */
  border:2px solid darkslategray;
  /* color:blue; */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.644);
  font-size: 18pt;
}
</style>
