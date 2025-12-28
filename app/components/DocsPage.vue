<template>
    <article class="prose">

        <MDCRenderer :body="parsedContent.body" tag="article" :cache-key="mdFile"
            class="w-full overflow-hidden max-w-[1000px]" />
    </article>
</template>

<script lang="ts">
interface DocsPageProps {
    title: string,
    description: string,
    mdFile: string;
}
</script>

<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

const props = defineProps<DocsPageProps>()

const { setPageData } = usePageData()
setPageData({ description: props.description, title: props.title })

const { data: content } = await useFetch<string>(`https://raw.githubusercontent.com/Nuxt-Loaders/nuxt-loaders/main/${props.mdFile}`, {
    key: props.mdFile,
    retry: 5
});

const parsedContent = ref<Record<string, any>>({})
parsedContent.value = await parseMarkdown(content.value as string);
</script>