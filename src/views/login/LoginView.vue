<template>
    <div class="login-view">
        <div class="container">
            <div class="row align-items-center justify-content-center login-row">
                <div class="col-12 col-md-6 text-center align-self-center">
                    <div class="card login-card">
                        <div class="card-header">
                            nicer Dashboard
                        </div>
                        <div class="card-body">
                            <form @submit.prevent='authenticate'>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="username">username</span>
                                            </div>
                                            <input type="email" class="form-control" aria-label="email"
                                                   aria-describedby="email" name="email" v-model="formLogin.email">
                                        </div>

                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="password">password</span>
                                            </div>
                                            <input type="password" class="form-control" name="password" aria-label="password"
                                                   aria-describedby="password" v-model="formLogin.password">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-left">
                                        <button type="button" class="btn btn-ub" @click.prevent="logout">logout
                                        </button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <button type="submit" class="btn btn-ub">login
                                        </button>
                                    </div>
                                </div>

                                <router-link :to="{name: 'dashboard'}">
                                    to dashboard
                                </router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./LoginView.ts"></script>

<style lang="scss" src="./LoginView.scss" scoped></style>