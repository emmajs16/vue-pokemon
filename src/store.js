import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      Pokemon: [],
    	storePokemon: [
        {name: 'Squirtle', level: 1, type: 'info'},
        {name: 'Bulbasaur', level: 1, type: 'success'},
        {name: 'Charmander', level: 1, type: 'danger'},
        {name: 'Pikachu', level: 1, type: 'warning'},
      ],
  },
  mutations: {
    addPokemon(state, pokemon) {
        state.Pokemon.push(Object.assign({}, pokemon))
    },
    deletePokemon(state, index) {
        state.Pokemon.splice(index,1)
    },
    trainPokemon(state, index) {
        state.Pokemon[index].level +=1
        console.log(state.Pokemon[index].level)

    }
  },
  actions: {
  },
  getters: {
    storePokemon: state => {
      return [{
          name: 'Squirtle',
          type: 'info',
          level: 1,
        },
        {
          name: 'Bulbasaur',
          type: 'success',
          level: 1
        },
        {
          name: 'Charmander',
          type: 'danger',
          level: 1
        },
        {
          name: 'Pikachu',
          type: 'warning',
          level: 1

      }
  ]
    },
    collection: state => {
        return state.Pokemon;
    },
    collectionSize: state => {
      // Provides the size of the user’s current collection of Pokemon
      return state.Pokemon.length
  },
}
})
