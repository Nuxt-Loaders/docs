<template>
  <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
import { getMetas } from '~/lib/getMetas'

const title = "Changelogs"
const description = "Here you will find the changelogs for Nuxt Loaders."
const mdFile = "CHANGELOG.md"
const pageTitle = "Nuxt Loaders | Changelogs"


useSeoMeta({
  title: pageTitle,
  description: "Here you will find the changelogs for Nuxt Loaders.",
  ...getMetas(description, pageTitle)
})

definePageMeta({
  layout: 'docs'
})
</script>