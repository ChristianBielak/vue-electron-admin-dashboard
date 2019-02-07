<template>
    <nav class="navigation-component navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'dashboard'}">
                nicer Dashboard
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="?">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item" v-if="!currentUser">
                        <a class="nav-link" href="#">Login</a>
                    </li>

                    <li class="nav-item" v-if="!currentUser">
                        <a class="nav-link" href="#">Register</a>
                    </li>

                    <li class="nav-item dropdown" v-if="currentUser">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{currentUser.name}} <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" @click.prevent="logout" href="#">
                                Logout
                            </a>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" src="./NavigationComponent.ts"></script>

<style lang="scss" src="./NavigationComponent.scss"></style>