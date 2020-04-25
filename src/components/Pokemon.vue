<template lang="html">
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{pokemon.name}}
                <small>(Level: {{pokemon.level}})</small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-right">
                <button
                    class="btn btn-info"  @click="addPokemon(pokemon)">
                    Get
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['pokemon'],
    methods:{
        addPokemon(pokemon) {
            this.$store.commit('addPokemon', pokemon)
        },
    },
}
</script>

<style lang="css" scoped>
</style>
