// State information for when different elements in the HouseInterface are clicked, hovered, etc.
import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        selection: null,
        clickSelection: null,

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
        },
        clickOne: () => {
            set(() => {
                console.log("clicked adu # 1")
                return {clickSelection: 1}
            })
        },
        clickTwo: () => {
            set(() => {
                console.log("clicked adu # 2")
                return {clickSelection: 2}
            })
        },
        clickThree: () => {
            set(() => {
                console.log("clicked adu # 3")
                return {clickSelection: 3}
            })
        },
        clickFour: () => {
            set(() => {
                console.log("clicked adu # 4")
                return {clickSelection: 4}
            })
        },
        resetClick: () => {
            set(() => {
                console.log("adu NONE/null")
                return {clickSelection: null}
            })
        },
        

    }

}))