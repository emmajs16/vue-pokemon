<template>
<div class="app">

  <div class="container">
    <div class="row">
      <app-header></app-header>
     <transition enter-class="" enter-active-class="animated slideInLeft" leave-class="" leave-active-class="animated slideOutRight">
      <router-view></router-view>
    </transition>
    </div>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  },
  data() {
    return {
      pokemon: {
        name: '',
        type: '',
        level: '',
      },
      yourPokemon: [],
      resource: {}
    }
  },
  methods: {

  },

}
</script>

<style>

</style>
