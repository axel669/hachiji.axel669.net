<script>
    import {
        Adornment,
        AppBar,
        Button,
        Icon,
        Paper,
        Screen,
        Select,
        Text,
        TextInput,

        Flex,
        Grid,
    } from "svelte-doric"

    import TimeDisplay from "$comp/clock/time-display"

    import zones from "$zone"

    let scr = null

    const close = () => scr.close()
    const { names, gmts } = zones.options
    const format = new Intl.DateTimeFormat(
        navigator.language,
        {
            // timeZone: zone,
            timeStyle: "long",
            dateStyle: "long",
            hourCycle: "h12",
            // hourCycle: $h12 ? "h12" : "h23",
        }
    ).format
    const adjustDate = (time, zone) => {
        const source = new Date(time)

        if (isNaN(source.getTime()) === true) {
            return false
        }

        const info = zones.info[zone]
        const dif = new Date().getTimezoneOffset() - info.offset
        source.setMinutes(
            source.getMinutes() - dif
        )

        return format(source)
    }

    let zone = zones.local.value
    let time = ""

    $: zoneInfo = zones.info[zone]
    $: otherZone = `${zoneInfo.name} (${zoneInfo.gmtOffset})`
    $: display = adjustDate(time, zone)
</script>

<Screen bind:this={scr}>
    <AppBar slot="title">
        Time Calculator

        <Adornment slot="action">
            <Button on:tap={close} adorn>
                <Icon name="close" />
            </Button>
        </Adornment>
    </AppBar>

    <Paper square card>
        <Flex>
            <TextInput
            bind:value={time}
            label="Time in other zone"
            type="datetime-local"
            />

            <Text textSize="18px">
                {otherZone}
            </Text>

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

            <div style="height: 12px" />

            {#if display !== false}
                <Text block center textSize="22px">
                    {display}
                </Text>
            {/if}

            <!-- <TimeDisplay {zone} time={timeDate} /> -->
        </Flex>
    </Paper>
</Screen>
