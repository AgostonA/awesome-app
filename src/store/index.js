import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    recipes: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    clearUser (state) {
      state.user = null
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setRecipes (state, payload) {
      state.recipes = payload
    },
    createRecipe (state, payload) {
      state.recipes.push(payload)
    }
  },
  actions: {
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid
            }
            commit('clearError')
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
          }
        )
    },
    signUserOut ({commit}) {
      firebase.auth().signOut()
        .then(
          user => {
            commit('clearUser')
          }
        )
    },
    auth ({commit}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit('setUser', user)
        } else {
          commit('setUser', null)
        }
      })
    },
    loadRecipes ({commit}) {
      firebase.database().ref('recipes').once('value')
        .then((data) => {
          const recipes = []
          const obj = data.val()
          for (let key in obj) {
            recipes.push({
              id: key,
              name: obj[key].name,
              type: obj[key].type,
              cuisine: obj[key].cuisine,
              imageUrl: obj[key].imageUrl,
              starCount: obj[key].starCount,
              heartCount: obj[key].heartCount
            })
          }
          commit('setRecipes', recipes)
        })
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
    createRecipe ({commit}, payload) {
      const recipe = {
        name: payload.name,
        type: payload.type,
        cuisine: payload.cuisine,
        imageUrl: payload.imageUrl,
        heartCount: payload.heartCount,
        starCount: payload.starCount
      }
      firebase.database().ref('recipes').push(recipe)
        .then((data) => {
          const key = data.key
          commit('createRecipe', {
            ...recipe,
            id: key
          })
          payload.components.forEach(function (component) {
            console.log('Ez az első komp' + component)
            const componentPayload = {
              id: key,
              name: component.name,
              recipeText: component.recipeText,
              ingredients: component.ingredients
            }
            store.dispatch('createComponent', componentPayload)
          })
        })
        .catch((error) => {
          console.log('Error in recipes' + error)
        })
    },
    createComponent ({commit}, payload) {
      console.log('Kreáty elindul')
      const component = {
        id: payload.id,
        name: payload.name,
        recipeText: payload.recipeText
      }
      firebase.database().ref('components').push(component)
        .then((data) => {
          const componentKey = data.key
          payload.ingredients.forEach(function (ingredient) {
            ingredient.key = componentKey
            store.dispatch('createIngredient', ingredient)
            console.log('Create lement LUL')
          })
        })
        .catch((error) => {
          console.log('Error in components' + error)
        })
    },
    createIngredient ({commit}, payload) {
      const ing = {
        name: payload.name,
        quantity: payload.quantity,
        unit: payload.unit
      }
      firebase.database().ref('components' + '/' + payload.key).push(ing)
      .then((data) => {
        console.log('Működik ! El sem hiszem !')
      })
      .catch((error) => {
        console.log('Szar az egész' + error)
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    recipes (state) {
      return state.recipes
    }
  }
})
