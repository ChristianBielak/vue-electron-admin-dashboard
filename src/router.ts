import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginView from "@/views/login/LoginView";
import Dashboard from "@/views/dashboard/Dashboard";
import ElementsIndexView from "@/views/elements/index/ElementsIndexView";
import store from './store/store';
import ArticlesView from "@/views/articles/ArticlesView";
import ArticlesIndexView from "@/views/articles/ArticlesIndexView/ArticlesIndexView";
import ArticlesCreateView from "@/views/articles/ArticlesCreateView/ArticlesCreateView";

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
        },
        {
            path: '/elements',
            name: 'elements',
            component: ElementsIndexView,
            beforeEnter(to, from, next) {
                store.dispatch('fetchElementTypes');
                next();
            }
        },
        {
            path: '/',
            component: ArticlesView,
            name: 'articles',
            children:[
                {
                    path: '/articles',
                    name: 'articles-index',
                    component: ArticlesIndexView,
                    beforeEnter(to, from, next){
                        store.dispatch('fetchArticles');
                        next();
                    }
                },
                {
                    path: '/',
                    name: 'articles-create',
                    component: ArticlesCreateView,
                    beforeEnter(to, from, next){
                        console.log('dfdf')
                        store.dispatch('fetchElementTypes');
                        store.dispatch('fetchLanguages');
                        next();
                    }
                }
            ]
        }
    ]
})
