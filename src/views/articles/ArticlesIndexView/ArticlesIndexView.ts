import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class ArticlesIndexView extends Vue {

    get articles(){
        return this.$store.getters.getArticles;
    }
}