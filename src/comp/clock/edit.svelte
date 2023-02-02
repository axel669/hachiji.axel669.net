<script>
    import {
        AppBar,
        Button,
        Paper,
        Screen,
        Select,
        Text,
        TextInput,

        Flex,
        Grid,
    } from "svelte-doric"

    import TimeDisplay from "./time-display.svelte"

    import zones from "$zone"
    import { clocks } from "$app"

    export let clock

    let scr = null

    let {zone, name} = clock
    const {id} = clock
    const {names, gmts} = zones.options

    const cancel = () => scr.close()
    const save = () => {
        clocks.edit(id, {zone, name})
        scr.close()
    }
</script>

<Screen bind:this={scr}>
    <AppBar slot="title">
        Edit
    </AppBar>

    <div>
        <Paper square card>
            <Flex>
                <TextInput bind:value={name} label="Clock Name" />

                <Grid cols="1fr 1fr" padding="0px">
                    <Select bind:value={zone} options={names} label="TimeZone">
                        <div slot="selected">
                            Set Zone By Name
                        </div>
                    </Select>

                    <Select bind:value={zone} options={gmts} label="GMT Offset">
                        <div slot="selected">
                            Set Zone By GMT Offset
                        </div>
                    </Select>
                </Grid>
                <TimeDisplay {zone} />

                <div style="height: 24px" />
                <Grid cols="1fr 1fr" padding="0px">
                    <Button color="danger" variant="outline" on:tap={cancel}>
                        Cancel
                    </Button>

                    <Button color="secondary" variant="outline" on:tap={save}>
                        Save
                    </Button>
                </Grid>
            </Flex>

        </Paper>
    </div>
</Screen>
