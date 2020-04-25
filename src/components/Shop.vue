<template lang="html">
    <div class="row">
        <div class="col-xs-12">
            <div>
                <h1>Perfectly-Proportioned Premium Pokemon Proprietor</h1>
                    <br>
                    <div>
                         <div class="col-sm-6 col-md-4">
                             <app-pokemon  v-for="pokemon in getPokemon" :pokemon="pokemon" ></app-pokemon>
                    </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Pokemon from './Pokemon.vue'
export default {
    components: {
        appPokemon: Pokemon,
  },
  computed:{
      getPokemon() {
      return this.$store.getters.storePokemon
    },
  }
}
</script>

<style lang="css" scoped>
</style>
