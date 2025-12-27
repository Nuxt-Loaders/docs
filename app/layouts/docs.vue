<template>
  <div class="flex gap-0">
    <SideBar class="w-56 border-r-[1px] border-r-white/50 h-[100svh] overflow-hidden fixed z-[50]" />
    <SideBar class="w-56 border-r-[1px] border-r-white/50 opacity-0 h-[100svh] overflow-hidden sticky z-[10]" />
    <div class="flex-1 flex flex-col p-0">
      <div
        class="bg-black/50 max-h-[200px] h-[150px] flex flex-col justify-center px-8 border-b-[1px] border-b-white/50">
        <h1 class="text-3xl font-bold">{{ pageData.title }}</h1>
        <p>{{ pageData.description }}</p>
      </div>
      <div class="p-8 bg">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { pageData } = usePageData();

</script>