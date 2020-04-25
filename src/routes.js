import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Collection from './components/Collection.vue';
import Shop from './components/Shop.vue';
// import Login from './components/Login.vue';
// import NewAccount from './components/newAccount.vue';
// import ResetPassword from './components/resetPassword.vue';
// import CalendarPage from './components/Calendar/CalendarPage.vue';
// import ToDoPage from './components/Todo/ToDoPage.vue';


export const routes = [

    { path: '/Home', name: 'Home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/Collection', name: 'Collection', components: {
        default: Collection,
        'header-top': Header
    } },
    { path: '/Shop', name: 'Shop', components: {
        default: Shop,
        'header-top': Header
    } },

];
