<template>
    <div class="articles-create-view">
        <div v-if="languages && elementTypes && languages.length && elementTypes.length">
            <pagebuilder-component :languages="languages" :element-types="elementTypes"></pagebuilder-component>
        </div>
        <div v-else>
                Keine Sprachen oder Elemente angelegt.
        </div>
    </div>
</template>

<script lang="ts" src="./ArticlesCreateView.ts"></script>

<style lang="scss" src="./ArticlesCreateView.scss" scoped></style>