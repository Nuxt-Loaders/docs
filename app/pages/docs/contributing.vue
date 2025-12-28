<template>

  <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
const title = "Contributing"
const description = "This is a quick nuxt-loader's contributing guide"
const mdFile = "CONTRIBUTING.md"

useSeoMeta({
  title: "Nuxt Loaders | Contributing",
  description: description,
})

definePageMeta({
  layout: 'docs'
})
</script>