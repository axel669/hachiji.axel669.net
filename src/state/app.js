import {writable} from "svelte/store"

// import emitterStore from "@/comm/emitter-store.js"

const h12 = writable(true)
const clockList = writable(
    JSON.parse(localStorage.clocks ?? "[]"),
)
const update = (func) =>
    (...args) => clockList.update(
        (current) => func(current, ...args)
    )
const clocks = {
    subscribe: clockList.subscribe,
    add: update(
        (clocks, clock) => [...clocks, clock]
    ),
    remove: update(
        (clocks, id) => clocks.filter(
            clock => clock.id !== id
        )
    ),
    edit: update(
        (clocks, id, info) => clocks.map(
            clock => {
                if (clock.id !== id) {
                    return clock
                }

                return {...info, id}
            }
        )
    )
}
clocks.subscribe(
    clocks => localStorage.clocks = JSON.stringify(clocks)
)

export {
    h12,
    clocks,
}
