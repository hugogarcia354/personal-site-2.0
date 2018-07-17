<template>
  <div class="body">
    <h1>Article Web Crawler</h1>
    <vue-accordion class="accordion" :items="crawlerPics" :styles="accordionSpecs"></vue-accordion>
    <br>
    <div class="description">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.

    </div>
    <br>
    <h1>ECS</h1>
    <vue-accordion class="accordion" :items="ECSPics" :styles="accordionSpecs"></vue-accordion> 
    <br> 
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.
    </div>
    <br>
    <div class="github">
      <h1>GitHub</h1>
      <button class="GitHubButton" v-on:click="GitHub"><span>
        <font-awesome-icon icon="github" ></font-awesome-icon>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

        Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.
      </span>
      </button>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)
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
          url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSInterests.JPG'
        },
        {
          title: 'Dynamic Interest Menu',
          text: 'Article menu based on chosen interests',
          url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSSideBar.JPG'
        },
        {
          title: 'Article Framing',
          text: 'View chosen article onsite',
          url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSArticleSample.JPG'
        },
        {
          title: 'Sweepstakes',
          text: 'Enter to win prizes!',
          url: 'https://ecschooling.org/#/',
          image: '/static/images/ECSSweepstakes.JPG'
        },
        {
          title: 'Beautiful Design',
          text: 'Pleasant Visuals',
          url: 'https://ecschooling.org/#/',
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
    GitHub: function(event) {
      window.open('https://github.com/hugogarcia354');
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
</style>
