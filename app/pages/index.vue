<script setup lang="ts">
import { ref } from 'vue'
import CircularLoader from '../components/loaders/CircularLoader.vue'
import PulseRailLoader from '../components/loaders/PulseRailLoader.vue'
import StepGradientLoader from '../components/loaders/StepGradientLoader.vue'
import TriDotLoader from '../components/loaders/TriDotLoader.vue'
import TripleBarLoader from '../components/loaders/TripleBarLoader.vue'
import TripleFlipLoader from '../components/loaders/TripleFlipLoader.vue'

// Raw imports for code display
import CircularLoaderCode from '../components/loaders/CircularLoader.vue?raw'
import PulseRailLoaderCode from '../components/loaders/PulseRailLoader.vue?raw'
import StepGradientLoaderCode from '../components/loaders/StepGradientLoader.vue?raw'
import TriDotLoaderCode from '../components/loaders/TriDotLoader.vue?raw'
import TripleBarLoaderCode from '../components/loaders/TripleBarLoader.vue?raw'
import TripleFlipLoaderCode from '../components/loaders/TripleFlipLoader.vue?raw'

const loaders = [
    { name: 'Circular Loader', component: CircularLoader, code: CircularLoaderCode },
    { name: 'Pulse Rail Loader', component: PulseRailLoader, code: PulseRailLoaderCode },
    { name: 'Step Gradient Loader', component: StepGradientLoader, code: StepGradientLoaderCode },
    { name: 'Tri Dot Loader', component: TriDotLoader, code: TriDotLoaderCode },
    { name: 'Triple Bar Loader', component: TripleBarLoader, code: TripleBarLoaderCode },
    { name: 'Triple Flip Loader', component: TripleFlipLoader, code: TripleFlipLoaderCode },
]

const isModalOpen = ref(false)
const currentCode = ref('')
const currentLoaderName = ref('')

const openModal = (loader: any) => {
    currentCode.value = loader.code
    currentLoaderName.value = loader.name
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
}

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
}
</script>

<template>
    <div class="container">
        <Header />
        <header class="hero">
            <h1>Nuxt Loaders</h1>
            <p>A collection of beautiful, customizable loading animations for your Nuxt applications.</p>

            <div class="install-box">
                <code>npm nuxi module add nuxt-loaders</code>
                <button class="copy-btn" @click="copyToClipboard('npm nuxi module add nuxt-loaders')"
                    title="Copy to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </div>
        </header>

        <main class="grid">
            <div v-for="loader in loaders" :key="loader.name" class="card">
                <div class="loader-wrapper">
                    <component :is="loader.component" />
                </div>
                <div class="card-content">
                    <h2>{{ loader.name }}</h2>
                    <button class="code-btn" @click="openModal(loader)">Code</button>
                </div>
            </div>
        </main>

        <footer>
            <p>Built with Nuxt 4</p>
        </footer>

        <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <div class="modal-header">
                    <h3>{{ currentLoaderName }}</h3>
                    <button class="close-btn" @click="closeModal">&times;</button>
                </div>
                <div class="code-block">
                    <pre><code>{{ currentCode }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:global(body) {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0f131b;
    color: #e2e8f0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.hero {
    text-align: center;
    margin-bottom: 4rem;
    padding: 4rem 0;
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(to right, #4ade80, #3b82f6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto 2rem;
}

.install-box {
    display: inline-flex;
    align-items: center;
    background-color: #1e293b;
    border: 1px solid #334155;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    gap: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.install-box code {
    font-family: 'Fira Code', monospace;
    color: #38bdf8;
    font-size: 1rem;
}

.copy-btn {
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: color 0.2s, background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.copy-btn:hover {
    color: #e2e8f0;
    background-color: #334155;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    flex: 1;
}

.card {
    background-color: #1e293b;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #334155;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    border-color: #475569;
}

.loader-wrapper {
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    background-color: #0f172a;
    border-radius: 0.5rem;
}

.card-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #f1f5f9;
    margin: 0;
}

.code-btn {
    background-color: #334155;
    color: #e2e8f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.code-btn:hover {
    background-color: #475569;
}

footer {
    text-align: center;
    margin-top: 4rem;
    padding: 2rem 0;
    color: #64748b;
    font-size: 0.875rem;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background-color: #1e293b;
    border-radius: 1rem;
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    border: 1px solid #334155;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-header {
    padding: 1.5rem;
    border-bottom: 1px solid #334155;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #f1f5f9;
}

.close-btn {
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;
}

.close-btn:hover {
    color: #e2e8f0;
}

.code-block {
    padding: 1.5rem;
    overflow: auto;
    background-color: #0f172a;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

pre {
    margin: 0;
}

code {
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
    color: #e2e8f0;
    white-space: pre-wrap;
}
</style>
