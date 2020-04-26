<template lang="html">
    <div class="panel" :class="panelClass(myPokemon)">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{myPokemon.name}}
                <small>(Level: {{myPokemon.level}})</small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-right">
                <button
                    class="btn" :class="buttonClass(myPokemon)" @click="trainPokemon(index)">
                    Train
                </button>
                <button
                    class="btn" :class="buttonClass(myPokemon)" @click="deletePokemon(index)">
                    Release
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['myPokemon','index'],
    methods:{
        deletePokemon(index) {
            console.log(index)
            this.$store.commit('deletePokemon', index)
        },
        trainPokemon(index){
            console.log(index)
            this.$store.commit('trainPokemon', index)
        },
        panelClass(pokemon){
            var string = "panel-"
            return string + pokemon.type
        },
        buttonClass(pokemon){
            var string = "btn-"
            return string + pokemon.type
        }
    },
    // computed:{
    //     panelClass(pokemon){
    //         var string = "panel-"
    //         return string + pokemon.type
    //     }
    // }
}
</script>

<style lang="css" scoped>
</style>
