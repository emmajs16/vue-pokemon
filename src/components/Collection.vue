<template lang="html">

        <div id="app">
          <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div>
                        <h1>My Pokemon Collection</h1>
                            <br>
                            <div v-if="countPokemon==0">
                                <!-- Use this div if you don't have any -->
                                <p>You don't have any pokemon! Go buy some from the store.</p>
                            </div>
                            <div v-else>
                                <!-- Else use this one and put Pokemon here -->
                                 <div class="col-sm-6 col-md-4">
                                 		<app-MyPokemon v-for="(myPokemon,index) in getPokemon" :myPokemon="myPokemon" :index="index"></app-MyPokemon>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
import MyPokemon from './MyPokemon.vue'
export default {
    components: {
        appMyPokemon: MyPokemon,
  },
  computed:{
      getPokemon() {
      return this.$store.getters.collection
    },
    countPokemon() {
    return this.$store.getters.collectionSize
    },
  }
}
</script>

<style lang="css" scoped>
</style>
