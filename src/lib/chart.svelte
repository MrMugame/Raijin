<script>
    import * as Pancake from '@sveltejs/pancake';

    export let content;
    export let type;

    const unit = type === "temp" ? "°C" : (type === "pres" ? "hpa" : "%");


    const dateOffset = (24*60*60) * 5;
    const now = Math.floor(new Date().getTime() / 1000);

    const maxx = now;
    const minx = now - dateOffset;

    const vals = content.map(x => x[type]);
    let miny = Math.min(...vals);
    let maxy = Math.max(...vals);

    const margin = ((maxy - miny) || 10) * 0.05;
    miny -= margin;
    maxy += margin;

    const middle = (maxy+miny) / 2

    const toDateString = (unix) => {
        const date = new Date(unix * 1000);
        return date.toLocaleDateString("de-DE")
    }

</script>


<div class="w-full aspect-video ">
    <Pancake.Chart x1={minx} x2={maxx} y1={miny} y2={maxy}>

        <Pancake.Grid horizontal count={5} let:value>
            <div class="w-full border-[1px]  {value != middle ? "border-dashed" : "border-solid border-[#B5B6BA]" }"></div>
            <span class="absolute left-0 top-0 -translate-y-full font-sans text-sm text-[#999]">{parseFloat(value.toFixed(1)).toString()} {unit}</span>
        </Pancake.Grid>
        
        <Pancake.Grid vertical count={7} let:value>
            <div class="h-full border-[1px] border-dashed"></div>
            <span class="absolute -left-1  translate-y-full font-sans text-sm text-[#999] rotate-45">{toDateString(value)}</span>
        </Pancake.Grid>

        <Pancake.Svg>
            <Pancake.SvgLine data={content} x="{d => d.time}" y="{d => d[type]}" let:d>
              <path class="stroke-accent stroke-[1.5px] fill-transparent" style="stroke-linejoin: round; stroke-linecap: round;" {d}/>
            </Pancake.SvgLine>
        </Pancake.Svg>
    </Pancake.Chart>
</div>
