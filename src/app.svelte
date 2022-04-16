<script>
    import {
        AppStyle,
        Baseline as baseline,

        Adornment,
        Button,
        Icon,
        Paper,
        TitleBar,
    } from "svelte-doric"
    import { LightTheme, DarkTheme, TronTheme } from "svelte-doric/theme"
    import { Flex, Grid } from "svelte-doric/layout"
    
    import Clock from "@/comp/clock.svelte"
    import ThemeSelector from "./theme-selector.svelte"
    import BeeTheme from "@/comp/bee-theme.svelte"

    import { clocks } from "@/state/app.js"

    let currentTheme = localStorage.theme ?? "bee"

    const themeMap = {
        light: LightTheme,
        dark: DarkTheme,
        tron: TronTheme,
        bee: BeeTheme,
    }

    function addClock() {
        clocks.emit(
            "add",
            { name: "New Clock", zone: "GMT", id: Date.now() }
        )
    }

    $: theme = themeMap[currentTheme]
    $: localStorage.theme = currentTheme
</script>

<AppStyle {baseline} {theme} />

<Paper width="min(100%, 720px)" center>
    <TitleBar sticky>
        TimeZone Tracker
    
        <Adornment slot="action">
            <ThemeSelector bind:currentTheme />
        </Adornment>
    </TitleBar>

    <Flex direction="column" padding="2px">
        <Button color="primary" on:tap={addClock} variant="outline">
            <Icon name="add" />
            New Clock
        </Button>
        <Grid cols={2} padding="0px" gap="4px">
            <Clock name="Local" zone={null} />
            {#each $clocks as {zone, name, id}}
                <Clock bind:zone bind:name {id} />
            {/each}
        </Grid>
    </Flex>
</Paper>
