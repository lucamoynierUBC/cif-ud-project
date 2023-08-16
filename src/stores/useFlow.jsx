import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware"

// this store is no longer used. Was used in earlier iterations
export default create(subscribeWithSelector((set) => {
    return {
        phase: "interaction3",
        setPhaseFour: () => {
            console.log("interaction # 3")
            set(() => {
                return {phase: "interaction4"}
            })
        },
        setPhaseTen: () => {
            set(() => {
                return {phase: "interaction10"}
            })
        },
        setPhaseElleven:() => {
            set(() => {
                return {phase: "interaction11"} 
            })
        }
    }
}))