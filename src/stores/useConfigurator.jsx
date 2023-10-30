import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(subscribeWithSelector((set) => {
    return {
        toggle: null,

        setToggle: (building) => {
            set(() => {
                console.log("toggle is: ", building)
                return {toggle : building}
            })
        }
    }
}))