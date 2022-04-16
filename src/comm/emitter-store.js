import {writable} from "svelte/store"
import EventBridge from "@axel669/event-bridge"

function emitterStore(defaultValue, actions) {
    const store = writable(defaultValue)
    const bridge = EventBridge()

    for (const [action, handler] of Object.entries(actions)) {
        bridge.on(
            action,
            (evt) => store.update(
                (value) => handler(value, evt.data)
            )
        )
    }

    return {
        subscribe: store.subscribe,
        set: store.set,
        emit: bridge.emit,
    }
}

export default emitterStore
