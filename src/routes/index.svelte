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

<main class="flex h-screen items-center flex-col pt-10">
    <h1 class="text-6xl font-sans font-light mb-10">Wetterstation</h1>
    <h2>Temperatur: {current.temp} Feuchtigkeit: {current.hum} Luftdruck: {current.pres}</h2>
    <div class="mt-20 min-w-[800px] w-[1000px]">
        <Chart content={content}/>
    </div>

    <a href="www.google.com" class="mt-auto m-5 text-accent text-lg hover:underline transition-all cursor-pointer">Source</a>
</main>
