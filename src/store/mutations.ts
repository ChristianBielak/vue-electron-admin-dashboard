export default {

    login(state: any) {
        state.loading = true;
        state.auth_error = null;
    },
    loginSuccess(state: any, payload: any) {
        state.auth_error = null;
        state.isLoggedin = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    loginFailed(state: any, payload: any) {
        state.loading = false;
        state.auth_error = payload.error;
    },
    logout(state: any) {
        localStorage.removeItem("user")
        ;
        state.isLoggedin = false;
        state.currentUser = null;
    },
    registerSuccess(state: any, payload: any) {
        state.reg_error = null;
        state.registeredUser = payload.user;
    },
    registerFailed(state: any, payload: any) {
        state.reg_error = payload.error;
    },
}