<template>

    <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
const title = "CLI"
const description = "This is a quick guide to nuxt-loader's cli commands"
const mdFile = "docs/cli.md"

definePageMeta({
    layout: 'docs'
})
</script>