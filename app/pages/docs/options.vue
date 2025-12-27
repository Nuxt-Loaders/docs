<template>

    <DocsPage :title="title" :description="description" :mdFile="mdFile" />

</template>

<script setup lang="ts">
const title = "Options"
const description = "This is a quick guide to nuxt-loader's module setup options"
const mdFile = "docs/options.md"

definePageMeta({
    layout: 'docs'
})
</script>