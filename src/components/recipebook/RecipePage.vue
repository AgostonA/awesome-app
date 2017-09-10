<template>
  <v-layout column>
    <v-flex xs-12>
      <h4>{{ recipe.name }}</h4>
      <v-layout row wrap>
        <v-flex sm6 xs12>
          <v-card>
            <ul v-for="component in recipe.components">
              <li v-for="ingredient in component.ingredients">
                {{ ingredient.quantity }} {{ ingredient.unit }} - {{ingredient.name}}
              </li>
            </ul>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12>
           <img :src="recipe.imageUrl"/>
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
      }
    },
    created () {
      this.$store.dispatch('loadRecipe', this.$route.params.recipeId)
    }
  }
</script>
