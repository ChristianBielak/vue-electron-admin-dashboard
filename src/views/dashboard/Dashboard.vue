<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>
                        Hi <!--{{currentUser.name}}!-->
                    </h1>
                    <router-link :to="{name: 'login'}">back to login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Dashboard.ts"></script>

<style lang="scss" src="./Dashboard.scss" scoped></style>