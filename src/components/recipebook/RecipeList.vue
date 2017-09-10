<template>
  <div>
  <v-layout row wrap mx-2>
    <v-select
      label="Kategória"
      v-bind:items="categories"
      v-model="selectedCategories"
      multiple
      chips
      hint="Kategória"
      class="picker-width mr-2"></v-select>
    <v-select
      label="Ország"
      v-bind:items="cousines"
      v-model="selectedCouisines"
      multiple
      chips
      hint="Ország"
      class="picker-width"></v-select>
    <v-spacer></v-spacer>
    <v-text-field
        append-icon="search"
        label="Keresés..."
        single-line
        v-model="search"
        class="picker-width">  
    </v-text-field>
  </v-layout>
  <v-container fluid grid-list-md class="grey lighten-4">
    <v-layout row wrap>
      <v-flex
        xs12 sm6 md6 lg4 xl3
        v-for="recipe in displayedRecipes"
        :key="recipe.id">
          <v-card>
            <v-card-media
              :src="recipe.imageUrl"
              height="200px"
              @click.stop="viewRecipe(recipe.id)">
              <v-container fill-height fluid>
                <v-layout fill-height column>
                  <v-flex xs12 align-start justify-end flexbox>
                    <v-avatar>
                      <img :src='recipe.flagUrl' class = "flag-icon"/>
                    </v-avatar>
                  </v-flex>
                </v-layout>
              </v-container>
              </v-card-media>
              <v-card-actions 
                class="white upper-card-actions">
                <span 
                  class= "caption" 
                  v-text="recipe.type"> 
                </span>
                <v-spacer></v-spacer>
                <v-icon 
                  class="ma-0 red--text text--lighten-1"v-for="n in recipe.heartCount" :key="n">favorite
                </v-icon>
              </v-card-actions> 
              <v-card-actions 
                class="white lower-card-actions">
                <span 
                  class= "headline" 
                  v-text="recipe.name">  
                </span>
                <v-spacer></v-spacer>
                <v-icon 
                  class="ma-0 yellow--text text--darken-2" 
                  v-for="n in recipe.starCount" :key="n">grade
                </v-icon>
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
        selectedCategories: [],
        selectedCouisines: [],
        categories: [ 'Előétel', 'Főétel' ],
        cousines: [ 'Japán', 'Koreai', 'Magyar', 'Olasz', 'Amcsi' ],
        search: ''
      }
    },
    computed: {
      recipes () {
        return this.$store.getters.recipes
      },
      displayedRecipes () {
        var that = this
        return this.recipes.filter(function (recipe) {
          return recipe.name.toLowerCase().includes(that.search.toLowerCase())
        })
      }
    },
    created () {
      this.$store.dispatch('loadRecipes')
      this.displayedRecipes = this.$store.getters.recipes
    },
    methods: {
      viewRecipe (recipeId) {
        this.$router.push('/RecipePage' + recipeId)
      }
    }
  }
</script>

<style lang="stylus">

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

 .picker-width{
  min-width: 250px;
  max-width: 250px;
 }

.full-width{
  width: 100%;
}

</style>
