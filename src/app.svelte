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
    import SecretMenu from "@/comp/secret-menu.svelte"

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

<style>
    clock-grid {
        display: grid;
        gap: 4px;
        padding: 0px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-auto-rows: min-content;
    }
</style>

<AppStyle {baseline} {theme} />

<Paper width="min(100%, 720px)" center>
    <TitleBar sticky>
        TimeZone Tracker
    
        <Adornment slot="action">
            <ThemeSelector bind:currentTheme />
        </Adornment>

        <Adornment slot="menu">
            <SecretMenu />
        </Adornment>
    </TitleBar>

    <Flex direction="column" padding="2px">
        <Button color="primary" on:tap={addClock} variant="outline">
            <Icon name="add" />
            New Clock
        </Button>
        <clock-grid>
            <Clock name="Local" zone={null} />
            {#each $clocks as {zone, name, id}}
                <Clock bind:zone bind:name {id} />
            {/each}
        </clock-grid>
    </Flex>
</Paper>
