<template>
  <div class="flex gap-0 w-full">
    <div class="md:block hidden">

      <SideBar class="w-56 border-r-[1px] border-r-white/50 h-[100vh] overflow-hidden fixed z-[50]" />
      <SideBar class="w-56 border-r-[1px] border-r-white/50 opacity-0 h-[100vh] overflow-hidden sticky z-[10]" />
    </div>
    <button @click="showSidebar = !showSidebar"
      class="fixed z-900 top-2 left-2 bg-black/50 p-2 fill-white md:hidden block">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-white w-6 h-6">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
          <path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
          <path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
    </button>
    <div v-if="showSidebar" class="block md:hidden">

      <SideBar class="w-56 border-r-[1px] border-r-white/50 h-[100vh] overflow-hidden fixed z-[50]" />
      <!-- <SideBar class="w-56 border-r-[1px] border-r-white/50 opacity-0 h-[100vh] overflow-hidden sticky z-[10]" /> -->
    </div>
    <div class="flex-1 flex flex-col p-0 w-full">
      <div
        class="bg-black/50 max-h-[200px] h-[150px] flex flex-col justify-center px-8 border-b-[1px] border-b-white/50 w-full">
        <h1 class="text-3xl font-bold">{{ pageData.title }}</h1>
        <p>{{ pageData.description }}</p>
      </div>
      <div class="p-8 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const showSidebar = ref(false);

const { pageData } = usePageData();

</script>