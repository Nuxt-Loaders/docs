<script setup lang="ts">
const props = defineProps<{
    code?: string
    language?: string
    filename?: string
    highlights?: number[]
}>()
</script>

<template>
    <div class="mt-4! bg-[rgb(8,8,8)] pb-2 pt-4 px-4 rounded-xl border-[1px] border-gray-800">
        <!-- Language label -->
        <div v-if="props.language" class="top-4 right-10 text-xs text-gray-500 uppercase">
            {{ props.language.charAt(0).toUpperCase() + props.language.slice(1).toLowerCase() }}
        </div>

        <pre><code><slot /></code></pre>
    </div>
</template>