<template>

    <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
import { getMetas } from '~/lib/getMetas'

const title = "CLI"
const description = "This is a quick guide to nuxt-loader's cli commands"
const mdFile = "docs/cli.md"
const pageTitle = "Nuxt Loaders | CLI"

useSeoMeta({
    title: pageTitle,
    description: description,
    ...getMetas(description, pageTitle)
})

definePageMeta({
    layout: 'docs'
})
</script>