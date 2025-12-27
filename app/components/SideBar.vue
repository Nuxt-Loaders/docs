<template>
    <div class="flex flex-col justify-between bg-black">
        <div class="flex flex-col gap-8">
            <NuxtLink to="/"
                class="bg-black/50 max-h-[200px] h-[150px] flex flex-col justify-center px-8 border-b-[1px] border-b-white/50">
                <h1 class="text-2xl font-bold">Nuxt Loaders</h1>
            </NuxtLink>
            <div class="flex flex-col space-y-4 overflow-y-auto px-8">
                <NuxtLink to="/docs/quick-setup" :class="(activeLink === '/docs/quick-setup' ? 'text-blue-500 before:bg-blue-500' : 'hover:text-white text-white/50 before:bg-white/50') + ` relative before:content-[''] before:block before:absolute
                before:left-[-10px] before:top-0 before:w-[2px] before:h-full before:bg-blue-400`">Quick
                    Setup</NuxtLink>
                <NuxtLink to="/docs/options" :class="(activeLink === '/docs/options' ? 'text-blue-500 before:bg-blue-500' : 'hover:text-white text-white/50 before:bg-white/50') + ` relative before:content-[''] before:block before:absolute
                before:left-[-10px] before:top-0 before:w-[2px] before:h-full before:bg-blue-400`">Options
                </NuxtLink>
                <NuxtLink to="/docs/cli" :class="(activeLink === '/docs/cli' ? 'text-blue-500 before:bg-blue-500' : 'hover:text-white text-white/50 before:bg-white/50') + ` relative before:content-[''] before:block before:absolute
                before:left-[-10px] before:top-0 before:w-[2px] before:h-full before:bg-blue-400`">
                    CLI</NuxtLink>
            </div>
        </div>
        <div class="flex flex-col space-y-4 overflow-y-auto px-8 pb-12">
            <NuxtLink to="/docs/changelogs" :class="(activeLink === '/docs/changelogs' ? 'text-blue-500 before:bg-blue-500' : 'hover:text-white text-white/50 before:bg-white/50') + ` relative before:content-[''] before:block before:absolute
                before:left-[-10px] before:top-0 before:w-[2px] before:h-full before:bg-blue-400 font-bold`">
                Changelogs
            </NuxtLink>
            <NuxtLink to="/docs/contributing" :class="(activeLink === '/docs/contributing' ? 'text-blue-500 before:bg-blue-500' : 'hover:text-white text-white/50 before:bg-white/50') + ` relative before:content-[''] before:block before:absolute
                before:left-[-10px] before:top-0 before:w-[2px] before:h-full before:bg-blue-400 font-bold`">
                Contributing</NuxtLink>

            <NuxtLink href="https://github.com/Nuxt-Loaders/nuxt-loaders" target="_blank" class="hover:underline hover:text-blue-500 flex gap-2 items-center group relative before:content-[''] before:block before:absolute
                before:left-[-10px] before:top-0 before:w-[2px] before:h-full before:bg-blue-400 font-bold">
                <LogosGithub class="size-[20px] group-hover:fill-blue-500" />GitHub
            </NuxtLink>

        </div>

    </div>
</template>

<script lang="ts" setup>

const { activeLink } = usePageData();

</script>