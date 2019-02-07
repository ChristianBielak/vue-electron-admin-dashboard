import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import mutations from "@/store/mutations";
import actions from './actions';
import {getLoggedinUser} from "@/helpers/auth";

Vue.use(Vuex)

const user: any = getLoggedinUser();

export default new Vuex.Store({
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        reg_error: null,
        registeredUser: null,
    },
    getters,
    mutations,
    actions
})
