<template>
    <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
import { getMetas } from '~/lib/getMetas'

const title = "Quick Setup"
const description = "This is a quick guide to nuxt-loader's quick setup"
const mdFile = "docs/quick-setup.md"
const pageTitle = "Nuxt Loaders | Quick Setup"

useSeoMeta({
    title: pageTitle,
    description: description,
    ...getMetas(description, pageTitle)
})


definePageMeta({
    layout: 'docs'
})
</script>