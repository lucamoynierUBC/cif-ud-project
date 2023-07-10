// State information for when different elements in the HouseInterface are clicked, hovered, etc.
import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        selection: null,

        selectOne: () => {
            set(() => {
                return {selection: 1}
            })
        },
        selectTwo: () => {
            set(() => {
                return {selection: 2}
            })
        },
        selectThree: () => {
            set(() => {
                return {selection: 3}
            })
        },
        selectFour: () => {
            set(() => {
                return {selection: 4}
            })
        },
        resetSelection: () => {
            set(() => {
                return {selection: null}
            })
        }

    }

}))