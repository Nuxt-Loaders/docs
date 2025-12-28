<template>

    <DocsPage :title="title" :description="description" :mdFile="mdFile" />

</template>

<script setup lang="ts">
import { getMetas } from '~/lib/getMetas'

const title = "Options"
const description = "This is a quick guide to nuxt-loader's module setup options"
const mdFile = "docs/options.md"
const pageTitle = "Nuxt Loaders | Options"

useSeoMeta({
    title: pageTitle,
    description: description,
    ...getMetas(description, pageTitle)
})


definePageMeta({
    layout: 'docs'
})
</script>