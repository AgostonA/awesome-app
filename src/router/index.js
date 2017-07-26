import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RecipeList from '@/components/recipebook/RecipeList'
import BoardGameList from '@/components/boardgames/BoardGameList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Főoldal',
      component: Home
    },
    {
      path: '/RecipeList',
      name: 'Receptek',
      component: RecipeList
    },
    {
      path: '/BoardGameList',
      name: 'Társasjátékok',
      component: BoardGameList
    }
  ],
  mode: 'history'
})
