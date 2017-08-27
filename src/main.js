// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'
import db from '../config/db'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: db.apiKey,
      authDomain: db.authDomain,
      databaseURL: db.databaseURL,
      projectId: db.projectId,
      storageBucket: db.storageBucket
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('bejelentkezve')
      } else {
        this.$router.push('/')
      }
    })
  }
})
