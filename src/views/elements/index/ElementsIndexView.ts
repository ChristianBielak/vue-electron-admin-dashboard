import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class ElementsIndexView extends Vue {

    get element_types(){
        return this.$store.getters.getElementTypes;
    }
}