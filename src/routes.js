import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Collection from './components/Collection.vue';
import Shop from './components/Shop.vue';


export const routes = [

    {path: '/Home', name:'Home', component: Home},
    { path: '/Collection', name: 'Collection', component: Collection },
    { path: '/Shop', name: 'Shop', component: Shop },

];
