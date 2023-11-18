import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware"

// Store for toggling the intro modal pop up on/off
export default create(subscribeWithSelector((set) => {
    return {
        ref: null,
        setRef: (ref) => set({ ref }),
    }
}))