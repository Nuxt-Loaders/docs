<template>

  <DocsPage :title="title" :description="description" :mdFile="mdFile" />
</template>

<script setup lang="ts">
const title = "Contributing"
const description = "This is a quick guide to nuxt-loader's contributing guide"
const mdFile = "CONTRIBUTING.md"

definePageMeta({
  layout: 'docs'
})
</script>