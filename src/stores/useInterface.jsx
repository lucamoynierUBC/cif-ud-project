// State information for when different elements in the HouseInterface are clicked, hovered, etc.
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware"

// this store is not used anymore
export default create(subscribeWithSelector((set) => {
    return {
        selection: null,
        clickSelection: null,
        visible: false,
        aduVisible: null,

        shedVisible: () =>{
            set(() => {
                return {aduVisible: "shed"}
            })
        },
        detatchedAduVisible: () =>{
            set(() => {
                return {aduVisible: "detatched"}
            })
        },
        basementAduVisible: () =>{
            set(() => {
                return {aduVisible: "basement"}
            })
        },
        atticAduVisible: () =>{
            set(() => {
                return {aduVisible: "attic"}
            })
        },
        toggleVisible: () => {
            set((state) => {
                return {visible: !state.visible}

            })
        },
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
                return {clickSelection: 1}
            })
        },
        clickTwo: () => {
            set(() => {
                return {clickSelection: 2}
            })
        },
        clickThree: () => {
            set(() => {
                return {clickSelection: 3}
            })
        },
        clickFour: () => {
            set(() => {
                return {clickSelection: 4}
            })
        },
        resetClick: () => {
            set(() => {
                return {clickSelection: null}
            })
        },
    }
}))