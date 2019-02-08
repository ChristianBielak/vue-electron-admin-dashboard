import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import PagebuilderComponent from "@/pagebuilder/components/PagebuilderComponent/PagebuilderComponent";

@Component({
    components:{
        PagebuilderComponent
    }
})
export default class ArticlesCreateView extends Vue {

    get languages(){
        return this.$store.getters.getLanguages;
    }

    get elementTypes(){
        return this.$store.getters.getElementTypes;
    }
}