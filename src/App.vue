<template>
<div class="app">

  <div class="container">
    <div class="row">
      <app-header></app-header>
      <router-view></router-view>
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
    submit() {

      this.resource.save({}, this.pokemon);
    },
    fetchData() {
      this.$http.get('data.json').then(
        response => {
          return response.json();
        }).then(data => {
        const resultArray = [];
        for (let key in data) {
          resultArray.push(data[key]);
        }
        this.allPokemon = resultArray;
      });
    }
  },
  created() {
    this.resource = this.$resource('data.json');
  }
}
</script>

<style>

</style>
