<script>
    // import { TronTheme } from "svelte-doric/theme"
    import { TronTheme, css } from "svelte-doric"

    const style = css`
        body {
            --primary: #dbdb26;
            --layer-border-color: var(--primary);
            --title-bar-background: var(--primary);
        }
    `
</script>

<TronTheme />
{@html style}
