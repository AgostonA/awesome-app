<template>
  <div>
    <v-card class="elevation-2 mb-2">
      <v-card-text>
        <v-flex xs5>
          <v-text-field
            v-model="component.name"
            label="Komponens neve"> 
          </v-text-field>
        </v-flex>
        <v-layout row>
          <h6>Összetevők</h6>
          <v-spacer></v-spacer>
          <v-btn dark small primary fab @click="addIngredient()">
            <v-icon dark>add</v-icon>
          </v-btn>
          <v-btn dark small primary fab @click="removeIngredient()">
          <v-icon dark>remove</v-icon>
          </v-btn>
        </v-layout>
        <Ingredient v-for="n in component.ingredients" :key="n" :ingredient="n"></Ingredient>
        <v-text-field
          v-model="component.recipeText"
          label="Leírás"
          textarea
         ></v-text-field> 
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import Ingredient from './Ingredient'

  export default {
    components: {
      Ingredient
    },
    props: ['component'],
    data () {
      return {
      }
    },
    methods: {
      addIngredient () {
        this.component.ingredients.push({})
      },
      removeIngredient () {
        this.component.ingredients.pop()
      }
    }
  }
</script>
