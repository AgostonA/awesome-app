<template>
 <v-layout row wrap v-if="loading">
    <v-flex xs12 class="text-xs-center">
      <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
    </v-flex>
  </v-layout>
  <v-layout column v-else>
    <v-card>
    <v-flex xs-12 class="mx-2">
      <v-layout row justify-space-between>
        <h4 class="recipe-title">{{ recipe.name }}</h4>
        <v-btn icon outline class="primary"
          @click="backToRecipeList">
          <v-icon primary>arrow_back</v-icon>
        </v-btn>
      </v-layout>
      <v-layout row nowrap>
        <v-flex xs12>
          <v-flex>
            {{recipe.type}}
          </v-flex>
           <v-flex>
            <v-icon 
              class="ma-0 yellow--text text--darken-2" 
              v-for="n in recipe.starCount" :key="n">grade
            </v-icon>
          </v-flex>
           <v-flex>
            <v-icon 
              class="ma-0 red--text text--lighten-1"v-for="n in recipe.heartCount" :key="n">favorite
            </v-icon>
          </v-flex>
        </v-flex>
        <v-flex md4 sm6 xs12>
          <span>Személyek száma: {{dishCount}}</span> 
          <v-slider 
            v-model="dishCount"
            thumb-label 
            step="1" min="1" max="10"
            snap> 
          </v-slider>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-between>
        <v-flex md4 sm6 xs12 order-xs2 order-sm1>
          <v-card class="yellow lighten-4">
          <p class="ingredient-header">Összetevők:</p><hr>
            <ul 
              v-for="component in recipe.components"
              class="ingredient-list">
              <li v-for="ingredient in component.ingredients">
                {{ ingredient.quantity * dishCount }} {{ ingredient.unit }} - {{ingredient.name}}
              </li>
            </ul>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 order-xs1 order-sm2>
           <img class="recipe-picture" :src="recipe.imageUrl"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-layout class="my-2">
      <v-flex>
        <ul>
          <li 
            v-for="component in recipe.components"
            class="instruction-list">
            {{ component.recipeText }}
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-card>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dishCount: 4
      }
    },
    computed: {
      recipe () {
        return this.$store.getters.detailedRecipe
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      backToRecipeList () {
        this.$router.push('/RecipeList')
      }
    },
    created () {
      this.$store.dispatch('loadRecipe', this.$route.params.recipeId)
    }
  }
</script>

<style lang="stylus">

  .recipe-title {
    text-transform: capitalize;
  }

  .recipe-picture {
    display: block;
    margin: auto;
    width: 100%;
  }

  .ingredient-header {
    margin: 0px;
    font-weight: 500;
  }

  .ingredient-list li{
    padding-left: 1em; 
    margin-bottom: .5em; 
  }

  .instruction-list {
    list-style-type: none;
  }


</style>
