<script>
    import {
        Adornment,
        Button,
        Icon,
        Paper,
        Text,
        TitleBar,

        Flex,

        dialog,
        Confirm,
    } from "svelte-doric"

    import TimeDisplay from "$/comp/clock/time-display"

    import { clocks } from "$app"

    export let clock
    export let edit
    export let isLocal = false

    const {name, id, zone} = clock

    const remove = async () => {
        const remove = await dialog.show(
            Confirm,
            {
                message: `Remove ${clock.name}?`,
            }
        )

        if (remove !== true) {
            return
        }

        clocks.remove(id)
    }
</script>

<Paper card>
    <TitleBar center slot="title">
        {name}

        <Adornment slot="action">
            {#if isLocal === false}
                <Button adorn color="primary" on:tap={() => edit(clock)}>
                    <Icon name="pencil" />
                </Button>
            {:else}
                <Button adorn color="secondary" on:tap={() => edit(null)}>
                    <Icon name="calculator" />
                </Button>
            {/if}
        </Adornment>

        <Adornment slot="menu">
            {#if isLocal === false}
                <Button adorn color="danger" on:tap={remove}>
                    <Icon name="remove" />
                </Button>
            {/if}
        </Adornment>
    </TitleBar>

    <TimeDisplay {zone} />
</Paper>
