<template>
    <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
const title = "Quick Setup"
const description = "This is a quick guide to nuxt-loader's quick setup"
const mdFile = "docs/quick-setup.md"

useSeoMeta({
    title: "Nuxt Loaders | Quick Setup",
    description: description,
})


definePageMeta({
    layout: 'docs'
})
</script>