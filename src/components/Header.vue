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
                <strong class="navbar-text navbar-right">Pokemon: 0</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a @click="save">Save Data</a></li>
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </nav>
</template>
<script type="text/javascript">
export default {
methods:{
    save(){
        this.resource.save({}, this.pokemon);
    },
    load(){
    this.resource = this.$resource('data.json');
    }
}
}
</script>
