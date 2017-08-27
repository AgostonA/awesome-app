<template>
  <v-layout row wrap>
    <v-flex sm2 xs4>
      <v-text-field
        label="Mennyiség"
        v-model="ingredient.quantity"> 
      </v-text-field>
    </v-flex>
    <v-flex sm3 xs6>
      <v-text-field
        label="Mértékegység"
        v-model="ingredient.unit">
      </v-text-field>
    </v-flex>
    <v-flex sm7 xs10>
      <v-text-field
        label="Összetevő"
        v-model="ingredient.name">
      </v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['ingredient']
  }
</script>
