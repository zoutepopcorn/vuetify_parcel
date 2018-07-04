<template>
<div id="app">
  <!-- <h1></h1>


   -->
  <v-app>
    <v-content>
      <v-btn color="success">{{message}}</v-btn>
    </v-content>
  </v-app>

  <v-slider></v-slider>


</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Welcome this is Vuetify  Parcel'
    }
  }
}
</script>

<style lang="scss">

</style>
