<template>
    <div>
      <v-container fluid>
        <v-carousel icon="stop">
          <v-carousel-item v-for="(item,i) in carouselItems" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
</template>

<script type="text/javascript">
	
export default {
  data () {
    return {
      carouselItems: [
          {src: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'},
          {src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg'},
          {src: 'http://i.telegraph.co.uk/multimedia/archive/02474/cat-eyebrows-1_2474686k.jpg'},
          {src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-07/29/15/asset/buzzfeed-prod-web12/sub-buzz-16779-1469819228-1.jpg?downsize=715:*&output-format=auto&output-quality=auto'}
      ]
    }
  }
}

</script>
