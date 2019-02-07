export default {

    isLoading(state: any) {
        return state.loading;
    },
    isLoggedin(state: any) {
        return state.isLoggedin;
    },
    currentUser(state: any) {
        return state.currentUser;
    },
    authError(state: any) {
        return state.auth_error;
    },
    regError(state: any) {
        return state.reg_error;
    },
    registeredUser(state: any) {
        return state.registeredUser;
    },
}