import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import del from "rollup-plugin-delete"
import html from "@axel669/rollup-html-input"
import $path from "@axel669/rollup-dollar-path"
// import copyStatic from "@axel669/rollup-copy-static"

export default {
    input: "src/index.html",
    output: {
        file: `build/app-d${Date.now()}.js`,
        format: "iife",
    },
    plugins: [
        html(),
        $path({
            root: "src",
            paths: {
                $bee: "src/comp/bee-theme.svelte",
                $now: "src/state/now.js",
                $comp: "src/comp",
                $zone: "src/data/zone.js",
                $app: "src/state/app.js"
            }
        }),
        del({ targets: "./build/*" }),
        svelte(),
        resolve(),
        commonjs(),
    ]
}
