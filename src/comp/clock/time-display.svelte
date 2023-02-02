<script>
    import {
        Text,
    } from "svelte-doric"

    import now from "$now"
    import zones from "$zone"

    export let zone
    export let time = null

    $: name = zones.name[zone]
    $: formatTime = zones.format(zone)
    $: display = formatTime(time ?? $now)
</script>

<style>
    clock-display {
        display: block;
        padding: 24px 4px;
    }
</style>

<clock-display>
    <Text block align="center" textSize="22px">{name}</Text>
    <Text block align="center" textSize="22px">{display}</Text>
</clock-display>
