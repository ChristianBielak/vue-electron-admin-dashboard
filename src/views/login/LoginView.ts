import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {login} from "@/helpers/auth";

@Component
export default class LoginView extends Vue {

    formLogin: any = {
        email: '',
        password: ''
    };


    logout(){
        this.$store.commit('logout');
        //this.$router.push(‘/login’);
    }

    authenticate() {
                console.log('auth')
        this.$store.dispatch('login');
        login(this.$data.formLogin)
            .then(res => {
                this.$store.commit('loginSuccess', res);

                console.log('success')

                /* Redirect for successfully login */
                this.$router.push({name: 'dashboard'});
            })
            .catch(error => {
                this.$store.commit('loginFailed', {error});
            })
    }
}