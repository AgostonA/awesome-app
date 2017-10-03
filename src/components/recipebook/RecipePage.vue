<template>
 <v-layout row wrap v-if="loading">
    <v-flex xs12 class="text-xs-center">
      <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
    </v-flex>
  </v-layout>
  <v-layout column v-else>
    <v-flex xs-12>
      <h4>{{ recipe.name }}</h4>
      <v-layout row wrap>
        <v-flex sm6 xs12 order-xs2 order-sm1>
          <v-card>
            <ul v-for="component in recipe.components">
              <li v-for="ingredient in component.ingredients">
                {{ ingredient.quantity }} {{ ingredient.unit }} - {{ingredient.name}}
              </li>
            </ul>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 order-xs1 order-sm2>
           <img class="recipe-picture" :src="recipe.imageUrl"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-layout>
      <v-flex>
        <ul>
          <li v-for="component in recipe.components">
            {{ component.recipeText }}
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
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
    created () {
      this.$store.dispatch('loadRecipe', this.$route.params.recipeId)
    }
  }
</script>

<style lang="stylus">

  .recipe-picture {
    display: block;
    margin: auto;
    width: 100%;
  }

</style>
