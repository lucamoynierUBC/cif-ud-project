import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware"

// Store for toggling the intro modal pop up on/off
export default create(subscribeWithSelector((set) => {
    return {
        modalPhase: true,

        modalToggle: () => {
            console.log("into box closed")
            set((state) => {
                return {modalPhase: !state.modalPhase}
            })
        },
        guiIntroTurnOn: () => {
            console.log("intro box opened")
            set(() => {
                return {guiIntroPhase: "on"}
            })
        }
    }
}))