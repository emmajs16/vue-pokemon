<template lang="html">
    <div class="panel" :class="panelClass(pokemon)">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{pokemon.name}}
                <small>(Level: {{pokemon.level}})</small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-right">
                <button
                    class="btn" :class="buttonClass(pokemon)"  @click="addPokemon(pokemon)">
                    Get
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    addPokemon(pokemon) {
      this.$store.commit('addPokemon', pokemon)
    },
    panelClass(pokemon) {
      var string = "panel-"
      return string + pokemon.type
    },
    buttonClass(pokemon) {
      var string = "btn-"
      return string + pokemon.type
    }
  },
}
</script>

<style lang="css" scoped>
</style>
