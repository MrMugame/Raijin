<script context="module">
    export const router = false;
    export const hydrate = false;
</script>

<script>
    import Chart from "$lib/chart.svelte";

    export let content;
</script>

<main class="flex h-screen items-center flex-col">
    <h1>Welcome to SvelteKit</h1>
    <div class="w-1/2 mt-20">
        <Chart content={content}/>
    </div>
</main>
