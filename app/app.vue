<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <Loader v-if="isLoading" class="z-[1000] bg-black!" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

const { isLoading } = useLoader();


</script>
