<template>
    <div class="w-full max-w-[600px] mx-auto">
        <div class="header-content flex justify-between items-center w-full px-4 py-4 bg-[#1E293B] rounded-md">
            <NuxtLink to="/" class="flex gap-2">
                <NuxtImg src="/logo_small.png" alt="nuxt-loaders" class="w-[25px] h-[25px] object-contain" width="100"
                    height="100" />
                <h1>Nuxt Loaders</h1>
            </NuxtLink>
            <nav>
                <ul class="flex gap-8">
                    <li>
                        <NuxtLink href="/docs/quick-setup" class="hover:underline hover:text-blue-500">Docs</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink href="https://github.com/Nuxt-Loaders/nuxt-loaders" target="_blank"
                            class="hover:underline hover:text-blue-500 flex gap-2 items-center group">
                            <LogosGithub class="size-[20px] group-hover:fill-blue-500" />GitHub
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>