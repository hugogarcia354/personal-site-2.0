<template>
  <div class="body">
    <h1>Article Web Crawler</h1>
    <div class="scrolling-wrapper">
      <div class="card">
        <div class="awc1"/>
        <div class="mobileDescription">
          Source Code
          <br>
          Example of Code
        </div>
      </div>
      <div class="card">
        <div class="awc2"/>
        <div class="mobileDescription">
          Source Code
          <br>
          Example of Code
        </div>
      </div>
      <div class="card">
        <div class="awc3"/>
        <div class="mobileDescription">
          Crawler
          <br>
          Example of Crawler running
        </div>
      </div>
      <div class="card">
        <div class="awc4"/>
        <div class="mobileDescription">
          Data Aggregation
          <br>
          Example of Article Aggregation
        </div>
      </div>
    </div>
    <button class="mobile-button" v-on:click="redirect('https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler')">Check it out!</button>
    <vue-accordion class="accordion" :items="crawlerPics" :styles="accordionSpecs"></vue-accordion>
    <br>
    <div class="description">
      The Article Web Crawler is an application used by the ECS web site to aggregate news articles. Ran as an executable, the application can be ran at anytime and targets specific whitelisted websites. The application then "crawls" through each article on the site and matches the articles key tags with targeted keywords. If a match is found, then the article gets loaded on to the ECS database for use by the ECS User Base.
        <div class="projectSpecs">
          <h2>Project Specifications</h2>
          <div class="specList">
              <li>Built with C#</li>
              <li>Separate executable</li>
              <li>Can be run from any machine and links to specified database</li>
          </div>
        </div>
    </div>
    <br>
    <h1>ECS (Extra Curricular Schooling)</h1>
    <div class="scrolling-wrapper">
      <div class="card">
        <div class="ecs1"/>
        <div class="mobileDescription">
          Dynamic Interest Tags
          <br>
          Interests based on available articles
        </div>
      </div>
      <div class="card">
        <div class="ecs2"/>
        <div class="mobileDescription">
          Dynamic Interest Menu
          <br>
          Article menu based on chosen interests
        </div>
      </div>
      <div class="card">
        <div class="ecs3"/>
        <div class="mobileDescription">
          Article Framing
          <br>
          View chosen article onsite
        </div>
      </div>
      <div class="card">
        <div class="ecs4"/>
        <div class="mobileDescription">
          Sweepstakes
          <br>
          Enter to win prizes!
        </div>
      </div>
      <div class="card">
        <div class="ecs5"/>
        <div class="mobileDescription">
          Beautiful Design
          <br>
          Pleasant Visuals
        </div>
      </div>
    </div>
    <!-- <button class="mobile-button" disabled= 'true' v-on:click="redirect('https://ecschooling.org/#/')">Check it out!</button> -->
    <vue-accordion class="accordion" :items="ECSPics" :styles="accordionSpecs"></vue-accordion> 
    <br> 
    <div class="description">
      A Single Page Web Application, ECS is a website that is directed to users that want to have an easy hub to acquire articles on their interests. Users choose from a set of interests and are then shown a list of articles they can read from. Once read, users earn points that can be used to enter raffles and win real prizes.  
      <div class="projectSpecs">
          <h2>Project Specifications</h2>
          <div class="specList">
              <li>ASP.NET Server</li>
              <li>Vue.JS FrontEnd</li>
              <li>Using a hosted Database</li>
              <li>Admin Capabilities</li>
              <li>User Account Capabilities</li>
          </div>
        </div>
    </div>
    <br>
    <div class="github">
      <h1>GitHub</h1>
      <button class="GitHubButton" v-on:click="redirect('https://github.com/hugogarcia354')"><span>
        Click Here to see the source control of many of the projects I have worked on, including the projects listed above.
      </span>
      </button>
      
    </div>
       <br><br><br>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  components: {
  },
  data () {
    return {
      crawlerPics: [
        {
          title: 'Source Code',
          text: 'Example of Code',
          url: 'https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler',
          image: '/static/images/CrawlerCodeEx.JPG'
        },
        {
          title: 'Source Code',
          text: 'Example of Code',
          url: 'https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler',
          image: '/static/images/CrawlerCodeEx2.JPG'
        },
        {
          title: 'Crawler',
          text: 'Example of Crawler running',
          url: 'https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler',
          image: '/static/images/CrawlerRunning.JPG'
        },
        {
          title: 'Data Aggregation',
          text: 'Example of Article Aggregation',
          url: 'https://github.com/extra-curricular-schooling/ecs-development/tree/master/ECSDevServer/ECS.WebCrawler',
          image: '/static/images/CrawlerDB.JPG'
        },
      ],
      ECSPics: [
        {
          title: 'Dynamic Interest Tags',
          text: 'Interests based on available articles',
          // url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSInterests.JPG'
        },
        {
          title: 'Dynamic Interest Menu',
          text: 'Article menu based on chosen interests',
          //url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSSideBar.JPG'
        },
        {
          title: 'Article Framing',
          text: 'View chosen article onsite',
         // url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSArticleSample.JPG'
        },
        {
          title: 'Sweepstakes',
          text: 'Enter to win prizes!',
          //url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSSweepstakes.JPG'
        },
        {
          title: 'Beautiful Design',
          text: 'Pleasant Visuals',
          //url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSDesign.JPG'
        },
      ],
      accordionSpecs: {
        // Size of images
        div: {
          height: '400px',
          margin: '0px auto',
          
        },
        // this will be bound to the style attribute of all `ul`s inside the accordion
        ul: {

        },
        // this will be bound to the style attribute of all `li`s inside the accordion
        li: {
          //fontSize: '15px', 
          border: '2px solid white'

        },
        // this will be bound to the style attribute of all `a`s inside the accordion
        a: {
          // padding: '0px',
          // // marginTop: '0px',
          // margin: '0px 0px 0px 0px'
          
        },
        // this will be bound to the style attribute of all `h2`s inside the accordion
        h2: {
          // marginTop: '0px'
          fontSize: '30px',
          textTransform: 'uppercase'
        },
        // this will be bound to the style attribute of all `p`s inside the accordion
        p: {
          textTransform: 'uppercase'
        }
      }
    }
  },
  methods: {
    redirect: function(url) {
      window.open(url);
    }
  }
}
</script>

<style scoped>


.accordion:hover{
  box-shadow: 0 5px 15px rgba(13, 15, 175, 0.4);
}
.body{
  color: lightblue;
}

h1{
  font-size: 30px;
  text-shadow:  0 5px 15px lightblue;
}

h2{
  font-size: 22px;
  border-bottom: 3px solid lightblue;
}

.projectSpecs{
  margin: auto;
  width: 40%;
}

.specList{
  margin: auto;
  text-align: left;
  padding: 2%;
  width:100%;
}

span{
color: lightblue;
}

.GitHubButton {
  background-color: black;
  border:none;
  padding: 15px 30px;
  font-size: 12pt;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.GitHubButton:active{
  outline:none;
}

.scrolling-wrapper{
  display:none;
}
.mobile-button{
  display: none;
}

@media screen and (max-width: 768px) {
  .accordion {
    display: none;
  }
  .scrolling-wrapper{
    display: block;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    size:300px;
  }
  .card {
    display: inline-block;  
    background-color: black;
  }
  .awc1{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/CrawlerCodeEx.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 325%; 
    background-position: 20%;
    background-repeat: no-repeat;
  }
  .awc2{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/CrawlerCodeEx2.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 325%; 
    background-position: 23%;
    background-repeat: no-repeat;
  }
  .awc3{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/CrawlerRunning.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 325%; 
    background-position: left;
    background-repeat: no-repeat;
  }
  .awc4{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/CrawlerDB.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 325%; 
    background-position: left;
    background-repeat: no-repeat;
  }
  .ecs1{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/ECSInterests.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 325%; 
    background-position: center top 10%;
    background-repeat: no-repeat;
  }

  .ecs2{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/ECSSideBar.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 200%; 
    background-position: 22% 5%;
    background-repeat: no-repeat;
  }
  .ecs3{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/ECSArticleSample.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 250%; 
    background-position: left 30% top 10%;
    background-repeat: no-repeat;
  }
  .ecs4{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/ECSSweepstakes.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 300%; 
    background-position: left 44% top 10%;
    background-repeat: no-repeat;
  }
 .ecs5{
    margin-top: 0%;
    background-color: black;
    /*set image*/
    background-image: url(/static/images/ECSDesign.JPG);
    /* Set a specific height */
    height: 300px;
    width: 200px;
    background-size: 280%; 
    background-position: left 15% top 85%;
    background-repeat: no-repeat;
  }
  .mobileDescription{
    font-size: 60%;
    color:silver;
  }
  .mobile-button{
    display: inline-block;
    background-color:darkslategrey;
    border:none;
    color:white;
    padding: 15px 30px;
    font-size: 16pt;
    border-radius: 12px;
    cursor: pointer;
    width: 75%;
  }
}

</style>
