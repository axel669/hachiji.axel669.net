<script>
    import {
        AppStyle,
        Baseline as baseline,

        AppBar,
        Adornment,
        Button,
        Footer,
        Icon,
        Paper,
        Screen,

        Flex, Grid,

        LightTheme, DarkTheme, TronTheme,

        css,
    } from "svelte-doric"
    import BeeTheme from "$bee"

    // import SecretMenu from "@/comp/secret-menu.svelte"
    import ThemeSelector from "$/theme-selector"

    import Clock from "$comp/clock"
    import Convert from "$comp/convert"
    import EditClock from "$/comp/clock/edit"

    import zone from "$zone"
    import { clocks } from "$app"

    let currentTheme = localStorage.theme ?? "bee"
    let scr = null

    const themeMap = {
        light: LightTheme,
        dark: DarkTheme,
        tron: TronTheme,
        bee: BeeTheme,
    }

    const add = () => {
        clocks.add(
            { name: "New Clock", zone: "GMT", id: Date.now() }
        )
    }
    const edit = (clock) => {
        if (clock === null) {
            scr.openStack(Convert)
            return
        }
        scr.openStack(EditClock, { clock })
    }

    const local = {
        zone: zone.local.value,
        id: null,
        name: "Local Time",
    }

    $: theme = themeMap[currentTheme]
    $: localStorage.theme = currentTheme

    const colorCorrection = css`
        body {
            color-scheme: dark;
        }
    `
</script>

{#if currentTheme !== "light"}
    {@html colorCorrection}
{/if}

<AppStyle {baseline} {theme} />

<Screen bind:this={scr}>
    <AppBar slot="title">
        TimeZone Tracker

        <Adornment slot="menu">
            <ThemeSelector bind:currentTheme />
        </Adornment>

        <Adornment slot="action">
            <Button on:tap={add} adorn>
                <Icon name="add" />
                <Icon name="clock" />
            </Button>
        </Adornment>

        <!-- <Adornment slot="menu">
            <SecretMenu />
        </Adornment> -->
    </AppBar>

    <Paper square>
        <Grid
        cols="repeat(auto-fit, minmax(320px, 1fr))"
        autoRow="min-content"
        gap="12px"
        >
            <Clock clock={local} {edit} isLocal />

            {#each $clocks as clock (clock)}
                <Clock {clock} {edit} />
            {/each}
        </Grid>
    </Paper>
</Screen>
