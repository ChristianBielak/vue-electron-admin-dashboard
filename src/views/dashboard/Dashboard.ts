import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {

    get currentUser(){
        return this.$store.getters.currentUser;
    }
}