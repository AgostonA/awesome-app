<template>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card>
        <form @submit.prevent="createRecipe">
          <v-layout column>
            <v-flex mt-4 mx-5 xs12>
             <h5>Recept adatai</h5>
              <v-layout mx-0 row wrap justify-space-between>
                <v-flex sm5 xs12>
                  <v-layout column>
                    <v-text-field
                      label="Recept neve"
                      v-model="recipeName"
                      required>  
                    </v-text-field>
                    <v-select
                      v-bind:items="recipeTypes"
                      v-model="recipeType"
                      label="Kategória"
                      single-line
                      bottom
                      required> 
                    </v-select>
                    <v-select
                      v-bind:items="cuisines"
                      v-model="cuisine"
                      label="Ország"
                      single-line
                      bottom
                      required> 
                    </v-select>
                    <v-flex>
                      <v-btn 
                        class="ma-0"
                        icon
                        v-for="n in 5" :key="n"
                        :ripple="false"
                        @click="heartCount=n">
                        <v-icon 
                          v-bind:class="{'red--text text--lighten-1': n <= heartCount}"
                          >favorite</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex>
                      <v-btn 
                        class="ma-0"
                        icon
                        v-for="n in 5" :key="n"
                        :ripple="false"
                        @click="starCount=n">
                        <v-icon 
                          v-bind:class="{'yellow--text text--darken-2': n <= starCount}"
                          >star</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex sm5 xs12>
                  <v-layout column>
                    <v-text-field
                      label="Kép url"
                      v-model="imageUrl"
                      required>  
                    </v-text-field>
                    <img :src="imageUrl" height="150">
                  </v-layout>
                </v-flex>
              </v-layout>
              <v-layout row mx-0 mt-4>
                <h5>Komponensek</h5>
                <v-spacer></v-spacer>
                <v-btn fab dark class="primary" @click="addComponent()">
                  <v-icon dark>add</v-icon>
                </v-btn>
                <v-btn fab dark class="primary" @click="removeComponent()">
                  <v-icon dark>remove</v-icon>
                </v-btn>
              </v-layout>
              <RecipeComponent v-for="n in components" :key="n" :component="n" >
              </RecipeComponent>
              <v-btn 
                class="primary" 
                :disabled="!formIsValid"
                type="submit"
                >Mentés
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import RecipeComponent from './RecipeComponent'

  export default {
    components: {
      RecipeComponent
    },
    data () {
      return {
        recipeName: '',
        recipeType: '',
        cuisine: '',
        imageUrl: '',
        heartCount: 1,
        starCount: 1,
        recipeTypes: [ 'Leves', 'Főétel', 'Mellékétel', 'Desszert' ],
        cuisines: [ 'Japán', 'Koreai', 'Magyar', 'Olasz', 'Amcsi' ],
        components: []
      }
    },
    computed: {
      formIsValid () {
        return this.recipeName !== '' &&
          this.recipeTypes !== '' &&
          this.cuisine !== '' &&
          this.imageUrl !== ''
      }
    },
    methods: {
      createRecipe () {
        if (!this.formIsValid) {
          return
        }
        const recipeData = {
          name: this.recipeName,
          type: this.recipeType,
          cuisine: this.cuisine,
          imageUrl: this.imageUrl,
          heartCount: this.heartCount,
          starCount: this.starCount
        }
        this.$store.dispatch('createRecipe', recipeData)
        this.$router.push('/RecipeList')
      },
      addComponent () {
        this.components.push({ingredients: []})
      },
      removeComponent () {
        this.components.pop()
      }
    }
  }

</script>
