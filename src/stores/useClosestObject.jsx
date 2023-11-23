import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware"


export default create(subscribeWithSelector((set) => {
    return {
        closestObject: null,
        setClosestObject: (closestObject) => set({ closestObject }),

    }
}))