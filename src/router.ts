import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginView from "@/views/login/LoginView";
import Dashboard from "@/views/dashboard/Dashboard";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            },
        }
    ]
})
