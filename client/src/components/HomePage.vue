<template>
 <div class="body">
   <div class="topParallax">
   </div>
   <div class="title">
     <h1>TITLE TEST</h1>
   </div>
   <div class="columnBody">
     <div class="column">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.

    </div>
    <div class = "column">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.

    </div>
   </div>
   <div class="midParallax">
   </div>
   <div class="bottomBody">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed tellus eu pellentesque. Curabitur accumsan felis sed mollis viverra. Fusce ac arcu sem. Nulla facilisi. Donec et gravida sapien, et lobortis tellus. Proin magna risus, tincidunt sed justo eu, efficitur placerat risus. Nunc viverra et sem sed viverra. Cras dictum, odio id suscipit feugiat, justo felis tempor ipsum, sed pretium lorem metus sit amet nisl. Sed sit amet mattis lorem. Suspendisse arcu nibh, auctor eget dignissim id, sollicitudin id risus. Ut eu orci augue. Aenean facilisis, quam et vulputate sodales, justo sem blandit quam, ac varius felis diam eu arcu. Etiam sed mi consequat, vulputate magna non, ornare erat. Nulla nulla risus, venenatis vel consequat at, aliquam ut erat.

      Sed venenatis faucibus orci at fermentum. Nullam gravida elit finibus libero rutrum lacinia. Fusce vel elementum nulla, at luctus metus. Vestibulum consequat fermentum aliquam. Proin bibendum massa ac viverra maximus. In sodales facilisis quam, non auctor quam fringilla at. Morbi nec pharetra diam, in mattis tellus. Donec vel eros laoreet, sodales odio sit amet, dictum odio. Fusce non est vulputate magna convallis finibus. Etiam arcu lacus, iaculis malesuada massa ut, ultricies dignissim nibh. Etiam in dui et erat placerat laoreet. Cras non risus eget ante accumsan varius. Proin sed sagittis purus, eget porttitor arcu. Fusce rutrum, sem pharetra interdum volutpat, nulla purus tincidunt nunc, ac imperdiet sem diam sit amet dui.
   </div>
   <div class="dummy"/>
 </div>
</template>

<script>
export default {
  data () {
    return{
    }
  },
  methods: {
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
.midParallax{
  margin-top: 0%;
  /*set image*/
  background-image: url(/static/images/htmlScreen.jpeg);
  /* Set a specific height */
  height: 350px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
 /* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
/* @media only screen and (max-device-width: 1366px) {
    .topParallax, .midParallax {
        background-attachment: scroll;
    }
}  */
.columnBody{
  display: flex;
}
.column{
  flex: 50%;
}

.dummy{
  height: 900px;
}
</style>
