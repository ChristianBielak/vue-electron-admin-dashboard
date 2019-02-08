<template>
    <div id="app">
        <navigation-component></navigation-component>
        <div class="py-4">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Watch} from "vue-property-decorator";
    import NavigationComponent from "@/components/navigation/NavigationComponent";

    @Component({
        components: {
            NavigationComponent
        }
    })
    export default class App extends Vue {
        mounted() {
        }

        @Watch('$route', {deep: true})
        onRouteChange() {
            if (this.currentUser) {
                console.log('logged in')
            } else {
                console.log('no auth');
                this.$router.push({name: 'login'});
            }
        }

        get currentUser() {
            return this.$store.getters.currentUser;
        }
    }

</script>

<style lang="scss" src="./assets/scss/app.scss"></style>
