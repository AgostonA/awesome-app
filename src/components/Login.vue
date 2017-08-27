<template>
  <v-container fluid fill-height class="login-background">
    <v-layout row>
      <v-flex class="pt-5" xs12 sm6 offset-sm3 md4 offset-md4 lg3 offset-lg4. xl2 offset-xl5>
        <v-card >
          <v-card-title primary-title>
            <div class="headline">Helló-belló</div>
          </v-card-title>
          <form @submit.prevent="onSignIn">
            <v-card-text>
              <v-text-field
               label="Email"
                type="email"
                v-model="email">
              </v-text-field>
              <v-text-field
                type="password"
                label="Jelszó"
                v-model="password"
                :rules="[error]">
              </v-text-field>
              <v-layout justify-end>
                <v-btn class="primary" type="submit">
                  Belépés
                </v-btn>
              </v-layout>
            </v-card-text>
          </form>  
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        validPW: (value) => this.error === null || 'Hibás felhasználónév vagy jelszó'
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error === null ? true : 'Hibás felhasználónév vagy jelszó'
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/Home')
        }
      }
    },
    methods: {
      onSignIn () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
  }
</script>


<style lang="stylus">

  .login-background{
     background: url("/static/blurry-background-1.jpg");
     background-size: cover;
  }

</style>
