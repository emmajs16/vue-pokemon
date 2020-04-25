<template lang="html">
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{myPokemon.name}}
                <small>(Level: {{myPokemon.level}})</small>
            </h3>
        </div>
        <div class="panel-body">
            <div class="pull-right">
                <button
                    class="btn btn-info" @click="trainPokemon(index)">
                    Train
                </button>
                <button
                    class="btn btn-info" @click="deletePokemon(index)">
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
        }
    },
}
</script>

<style lang="css" scoped>
</style>
