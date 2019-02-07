import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NavigationComponent extends Vue {

    logout(){
        this.$store.commit('logout');
        this.$router.push({name: 'login'});
    }

    get currentUser(){
        return this.$store.getters.currentUser;
    }
}