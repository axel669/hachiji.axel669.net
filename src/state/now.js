import { readable } from "svelte/store"

const now = readable(
    new Date(),
    function(set) {
        let last = new Date()
        set(last)
        
        function tick() {
            requestAnimationFrame(tick)
        
            const next = new Date()
            if (last.getSeconds() === next.getSeconds()) {
                return
            }
        
            last = next
            set(next)
        }
        
        tick()
    }
)


export default now
