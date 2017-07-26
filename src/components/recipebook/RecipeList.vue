<template>
  <div>
	<p>Ez lesz a receptkönyv</p>
	<v-container fluid grid-list-md class="grey lighten-4">
	  <v-layout row wrap>
	    <v-flex
            xs12 sm6 md6 lg4 xl3
            v-for="card in cards"
            :key="card.title"
        >
            <v-card>
              <v-card-media
                :src="card.src"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height column>
                  	<v-flex xs12 align-start justify-end flexbox>
                      <v-avatar>
                        <img :src='card.flagUrl' class = "flag-icon"/>
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions class="white upper-card-actions">
          		<span class= "caption" v-text="card.type"></span>
                <v-spacer></v-spacer>
                <v-icon class="heart-icon-margin" v-for="n in card.heart" :key="n">favorite</v-icon>
          	  </v-card-actions>	
              <v-card-actions class="white lower-card-actions">
                <span class= "headline" v-text="card.title"></span>
                <v-spacer></v-spacer>
                <v-icon class="heart-icon-margin" v-for="n in card.difficulty" :key="n">grade</v-icon>
              </v-card-actions>
            </v-card>
        </v-flex>
	  </v-layout>
	</v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cards: [
          {title: 'Bibimbap', type: 'Főétel', src: '/static/recipes/bibimbap.png', heart: 5, difficulty: 4, time: '120perc', flagUrl: '/static/flags/South Korea.png'},
          {title: 'Oyakodon', type: 'Főétel', src: '/static/recipes/oyakodon.png', heart: 3, difficulty: 1, time: '40perc', flagUrl: '/static/flags/Japan.png'},
          {title: 'Kaja3', type: 'Főétel', src: '/static/doc-images/cards/plane.jpg', heart: 2, difficulty: 2, time: '60perc', flagUrl: '/static/flags/Hungary.png'},
          {title: 'Kaja4', type: 'Főétel', src: '/static/doc-images/cards/plane.jpg', heart: 1, difficulty: 2, time: '30perc', flagUrl: '/static/flags/Hungary.png'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
 .heart-icon-margin{
 	margin: 0px;
 }

 .flag-icon{
  width: 100% !important;
  height: 100% !important;
 }

 .upper-card-actions{
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0px;

 }

 .lower-card-actions{
  padding-top: 0px;
  padding-left: 10px;
  padding-right: 10px;
 }

</style>
