<script>
    import { TronTheme } from "svelte-doric/theme"
    import { css } from "svelte-doric"

    const style = css`
        body {
            --primary: #dbdb26;
            --layer-border-color: var(--primary);
        }
    `
</script>

<TronTheme />
{@html style}
