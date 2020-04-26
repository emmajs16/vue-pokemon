<template lang="html">
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <router-link to="/home" exact>
            <div class="navbar-header">
                <a class="navbar-brand">Pokemon Collector</a>
            </div>
            </router-link>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/collection" tag="li" activeClass="active">
                    <a>Collection</a>
                    </router-link>
                    <router-link to="/shop" tag="li" activeClass="active">
                    <a>Pokemon Store</a>
                </router-link>
                </ul>
                <strong class="navbar-text navbar-right">Pokemon: {{countPokemon}}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <!-- <li class="dropdown"> -->
                        <!-- <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a> -->
                        <!-- <ul > -->
                            <li><a @click="save">Save Data</a></li>
                            <li><a @click="load">Load Data</a></li>
                        <!-- </ul> -->
                    <!-- </li> -->
                </ul>
            </div>
        </div>
    </nav>
    </nav>
</template>
<script type="text/javascript">
export default {
  methods: {
    save() {
      this.$http.put('https://pokemon-acb59.firebaseio.com/data.json', this.$store.getters.collection)
      console.log("Saved")
    },
    load() {
        this.$store.state.Pokemon = [];
        this.$http.get('https://pokemon-acb59.firebaseio.com/data.json').then(response =>
        {
            return response.json();
        }).then(data => {
            console.log(data)
            for(let key in data){
                // console.log("AHHHHHHHH")
                // console.log(data[key])
                // for (var i = 0; i < data[key].length; i++) {
                //     this.$store.state.Pokemon.push(data[key][i])
                // }
                this.$store.state.Pokemon.push(data[key]);
            }
            console.log(this.$store.state.Pokemon)

        });
        console.log("Loaded!")
    },
  },
  computed: {
    countPokemon() {
      return this.$store.getters.collectionSize
    },
  }
}
</script>
