<script>
    import {
        Select,
        Text,
    } from "svelte-doric"
    export let currentTheme
    const iconMap = {
        light: "sun",
        dark: "moon",
        tron: "laptop",
        bee: "brands:forumbee",
    }
    const themes = [
        { label: "Light", icon: "sun", value: "light" },
        { label: "Dark", icon: "moon", value: "dark" },
        { label: "Tron", icon: "laptop", value: "tron" },
        { label: "Bee", icon: "brands:forumbee", value: "bee" },
    ]
    $: icon = iconMap[currentTheme]
</script>

<Select options={themes} bind:value={currentTheme} label="Theme" {icon} variant="normal">
    <Text slot="selected">
    </Text>
</Select>
