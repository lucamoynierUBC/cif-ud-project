import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        guiIntroPhase: 'on',

        guiIntroTurnOff: () => {
            console.log('into box closed')
            set(() => {
                return {guiIntroPhase: 'off'}
            })
        },
        guiIntroTurnOn: () => {
            console.log('intro box opened')
            set(() => {
                return {guiIntroPhase: 'on'}
            })
        }
    }
}))