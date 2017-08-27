<template>
  <v-app>
    <v-navigation-drawer 
      v-if="loggedUser"
      persistent 
      dark 
      :mini-variant.sync="mini" 
      v-model="drawer" 
      overflow 
      class="secondary"
      enable-resize-watcher="true">
      <v-list class="pa-0">
        <v-list-tile avatar tag="div" class="primary">
          <v-list-tile-content>
            <v-list-tile-title>Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0 grey darken-2" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in menuItems" :key="item.title" class="grey darken-2 green--active" :to="item.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-if="loggedUser"
      id="toolbar" 
      fixed class="primary" 
      dark >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        v-if="pageTitle == 'Receptek'" 
        outline 
        class="white"
        :to="createRecipeUrl"> 
        Új recept </v-btn>
      <v-menu bottom left offset-y>
        <v-btn icon slot="activator">
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in userMenuItems" :key="item.title" @click="logOut()">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <main class="size-full">
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        menuItems: [
          { title: 'Főoldal', icon: 'home', route: '/Home' },
          { title: 'Receptek', icon: 'restaurant', route: '/RecipeList' },
          { title: 'Társasjátékok', icon: 'mood', route: '/BoardGameList' }
        ],
        userMenuItems: [
          { title: 'Kijelentkezés' }
        ],
        createRecipeUrl: '/CreateRecipe'
      }
    },
    computed: {
      pageTitle: function () {
        return this.$route.name
      },
      loggedUser () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      logOut () {
        this.$store.dispatch('signUserOut')
      }
    },
    created () {
      this.$store.dispatch('auth')
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  #toolbar{
    height: 56px !important;
  }

  .toolbar__content{
    height: 56px !important;
  }

  .navigation-drawer > .list .list__tile--active > :first-child .icon{
    color: $theme.primary !important;
  }

  .navigation-drawer > .list .list__tile--active{
  	color: $theme.primary  !important;
  }

  .size-full{
    height: 100vh;
  }
</style>
