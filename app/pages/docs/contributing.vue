<template>

  <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
import { getMetas } from '~/lib/getMetas'

const title = "Contributing"
const description = "This is a quick nuxt-loader's contributing guide"
const mdFile = "CONTRIBUTING.md"
const pageTitle = "Nuxt Loaders | Contributing"

useSeoMeta({
  title: pageTitle,
  description: description,
  ...getMetas(description, pageTitle)
})

definePageMeta({
  layout: 'docs'
})
</script>