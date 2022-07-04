<script>
    import * as Pancake from '@sveltejs/pancake';

    export let content;

    console.log(content)

    const dateOffset = (24*60*60) * 5;
    const now = Math.floor(new Date().getTime() / 1000);

    const maxx = now;
    const minx = now - dateOffset;

    const temps = content.map(x => x.temp);
    const miny = Math.min(...temps);
    const maxy = Math.max(...temps);

    const toDateString = (unix) => {
        const date = new Date(unix * 1000);
        return date.toLocaleDateString("de-DE")
    }

    const getPoints = (key) => {
        return content.map(x => {
            return {
                x: x.time,
                y: x[key]
            }
        })
    }

</script>


<div class="w-full aspect-video bg-gray-700">
    <Pancake.Chart x1={minx} x2={maxx} y1={miny} y2={maxy}>
        <Pancake.Box x1={minx} x2={maxx} y1={miny} y2={maxy}>
            <div class="w-full h-full border-black border-l-2 border-b-2 opacity-40"></div>
        </Pancake.Box>

        <Pancake.Grid horizontal count={5} let:value>
            <span class="absolute -left-5 -top-2.5 -translate-x-1/2">{value}</span>
        </Pancake.Grid>

        <Pancake.Grid vertical count={7} let:value>
            <span class="absolute -left-1 -bottom-8 -translate-x-1/2">{toDateString(value)}</span>
        </Pancake.Grid>

        <Pancake.Svg>
            <Pancake.SvgLine data={getPoints("temp")} let:d>
                {@debug d}
              <path class="stroke-red-600 stroke-2" {d}/>
            </Pancake.SvgLine>
        </Pancake.Svg>
    </Pancake.Chart>
</div>
