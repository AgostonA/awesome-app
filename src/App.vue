<template>
  <v-app>
    <v-navigation-drawer 
      persistent 
      dark 
      :mini-variant.sync="mini" 
      v-model="drawer" 
      overflow 
      class="grey darken-2"
      enable-resize-watcher="true">
      <v-list class="pa-0">
        <v-list-tile avatar tag="div" class="teal">
          <v-list-tile-content>
            <v-list-tile-title>Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0 grey darken-2" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in menuItems" :key="item.title" class="grey darken-2 green--active" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar id="toolbar" fixed class="teal" dark dense="false">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
    </v-toolbar>
    <main>
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
          { title: 'Főoldal', icon: 'home', route: '/' },
          { title: 'Receptek', icon: 'restaurant', route: '/RecipeList' },
          { title: 'Társasjátékok', icon: 'mood', route: '/BoardGameList' }
        ]
      }
    },
    computed: {
      pageTitle: function () {
        return this.$route.name
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  #toolbar{
  	height: 56px !important;
  }

  .navigation-drawer > .list .list__tile--active > :first-child .icon{
    color: #00BFA5 !important;
  }

  .navigation-drawer > .list .list__tile--active{
  	color: #00BFA5 !important;
  }
</style>
