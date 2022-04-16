<script>
    import {
        Adornment,
        Button,
        Icon,
        Paper,
        Select,
        Text,
        TitleBar,
    } from "svelte-doric"
    import { Flex } from "svelte-doric/layout"
    import { Dialog, Confirm, Prompt } from "svelte-doric/dialog"

    import now from "@/state/now.js"
    import {h12} from "@/state/app.js"
    import {zoneList} from "@/data/zones.js"
    import {clocks} from "@/state/app"

    export let zone
    export let name
    export let id

    let confirmation = null
    let nameChange = null

    async function remove() {
        const confirmed = await confirmation.show({
            title: "Confirm",
            message: `Remove the "${name}" clock?`,
            okText: "Remove",
        })

        if (confirmed !== true) {
            return
        }

        clocks.emit("remove", id)
    }
    async function rename() {
        const newName = await nameChange.show({
            title: "Change Clock Name",
            message: "New Name",
        })

        if (newName === false) {
            return
        }

        name = newName
    }

    $: fmt = new Intl.DateTimeFormat(
        navigator.language,
        {
            timeZone: zone ?? undefined,
            timeStyle: "medium",
            hourCycle: $h12 ? "h12" : "h23",
        }
    )
    $: display = fmt.format($now)
</script>

<style>
    time-text {
        font-size: 24px;
    }
    tz-selected {
        text-align: center;
    }
</style>

<Dialog bind:this={confirmation} component={Confirm} persistent />
<Dialog bind:this={nameChange} component={Prompt} persistent />
<Paper card>
    <TitleBar compact>
        {name}

        <Adornment slot="menu">
            {#if zone !== null}
            <Button on:tap={rename}>
                <Icon name="pencil" />
            </Button>
            {/if}
        </Adornment>
        <Adornment slot="action">
            {#if zone !== null}
            <Button color="danger" on:tap={remove}>
                <Icon name="remove" />
            </Button>
            {/if}
        </Adornment>
    </TitleBar>

    <Flex direction="column">
        {#if zone !== null}
            <Select options={zoneList} bind:value={zone} label="Timezone" let:selected>
                <tz-selected slot="selected">
                    Timezone<br />
                    {selected?.name ?? ""}
                </tz-selected>
            </Select>
        {/if}
        <Text adorn>
            <time-text>
                {display}
            </time-text>
        </Text>
    </Flex>
</Paper>
