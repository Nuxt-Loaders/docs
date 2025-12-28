<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <Loader v-if="isLoading" class="z-1000 bg-black! fixed! top-0 left-0 right-0 bottom-0 w-full h-full" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

const { isLoading } = useLoader();


</script>
