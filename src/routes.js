import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AllRestarurents from './components/AllRestarurents.vue'
import AddRestarurent from './components/AddRestarurent.vue'
import Update from './components/Update.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path:'/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path:'/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path:'/login'
    },
    {
        name: 'AllRestarurents',
        component: AllRestarurents,
        path:'/all-restarurent'
    },
    {
        name: 'AddRestarurent',
        component: AddRestarurent,
        path:'/add-restarurent'
    },
    {
        name: 'Update',
        component:Update,
        path:'/update/:id'
    }
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;

