import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        basement: false,
        attic: false,
        detatched: false,
        attatched: false, 

        selectBasement: () => {
            set((state) => {
                console.log("basement tag clicked ", !state.basement)
                return {basement: !state.basement, attic: false, detatched: false, attatched: false}
            })
        },
        unselectBasement: () => {
            set(() => {
                return {basement: false}
            })
        },
        selectAttic: () => {
            set((state) => {
                console.log("attic tag clicked ", !state.attic)
                return {attic: !state.attic, basement: false, detatched: false, attatched: false}
            })
        },
        selectDetatched: () => {
            set((state) => {
                console.log("detatched tag clicked ", !state.detatched)
                return {attic: false, basement: false, detatched: !state.detatched, attatched: false}
            })
        },
        selectAttatched: () => {
            set((state) => {
                console.log("attatched tag clicked ", !state.attatched)
                return {attic: false, basement: false, detatched: false, attatched: !state.attatched}
            })
        },
        unselectAll: () => {
            set(() => {
                return {basement: false, attic: false}
            })
        }
    }
}))