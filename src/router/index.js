import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import RecipeList from '@/components/recipebook/RecipeList'
import CreateRecipe from '@/components/recipebook/CreateRecipe'
import RecipePage from '@/components/recipebook/RecipePage'
import BoardGameList from '@/components/boardgames/BoardGameList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Főoldal',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/RecipeList',
      name: 'Receptek',
      component: RecipeList
    },
    {
      path: '/CreateRecipe',
      name: 'Recept létrehozása',
      component: CreateRecipe
    },
    {
      path: '/RecipePage:recipeId',
      name: 'Recept',
      component: RecipePage
    },
    {
      path: '/BoardGameList',
      name: 'Társasjátékok',
      component: BoardGameList
    }
  ],
  mode: 'history'
})
