<template>
  <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
const title = "Changelogs"
const description = "Here you will find the changelogs for Nuxt Loaders."
const mdFile = "CHANGELOG.md"


useSeoMeta({
  title: "Nuxt Loaders | Changelogs",
  description: "Here you will find the changelogs for Nuxt Loaders.",
})

definePageMeta({
  layout: 'docs'
})
</script>