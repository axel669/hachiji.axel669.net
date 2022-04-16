import {writable} from "svelte/store"

import emitterStore from "@/comm/emitter-store.js"

const h12 = writable(true)
const clocks = emitterStore(
    JSON.parse(localStorage.clocks ?? "[]"),
    {
        "add": (clocks, newClock) => [...clocks, newClock],
        "remove": (clocks, id) => clocks.filter(
            clock => clock.id !== id
        )
    }
)
clocks.subscribe(
    clocks => localStorage.clocks = JSON.stringify(clocks)
)

export {
    h12,
    clocks,
}
