<script context="module">
    export const router = false;
    export const hydrate = false;
</script>

<script>
    import Chart from "$lib/chart.svelte";

    export let content;

    const times = content.map(x => x.time);
    const max = Math.max(...times);
    const current = content[times.indexOf(max)];
</script>

<main class="flex h-screen items-center flex-col pt-10" id="test">
    <h1 class="text-6xl font-sans font-light mb-10">Wetterstation</h1>
    {#if content.length > 50}
    <div class="text-lg">
        <a href="#temp" class="text-[#999]">Temperatur:</a> {current.temp}°C
        <a href="#hum" class="text-[#999] ml-2">Feuchtigkeit:</a> {current.hum}%
        <a href="#pres"class="text-[#999] ml-2">Luftdruck:</a> {current.pres}hpa
    </div>
    <div class="mt-20 min-w-[800px] w-[1000px]">
        <div id="temp" class="hidden target:block"><Chart content={content} type="temp"/></div>
        <div id="pres" class="hidden target:block"><Chart content={content} type="pres"/></div>
        <div id="hum" class="hidden target:block"><Chart content={content} type="hum"/></div>
    </div>
    {:else}
        <h2 class="font-sans text-3xl text-red-600 my-auto">Keine Daten vorhanden</h2>
    {/if}

    <a href="https://github.com/MrMugame/Raijin" class="mt-auto m-5 text-accent text-lg hover:underline transition-all cursor-pointer">Source</a>
</main>

<style>
    main:target {
        background-color:white;
    }
</style>
