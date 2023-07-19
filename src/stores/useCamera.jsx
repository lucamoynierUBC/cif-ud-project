import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        zoom: 'far',

        zoomClose: () => {
            console.log('zoom close')
            set(() => {
                return {zoom: 'close'}
            })
        },
        zoomFar: () => {
            console.log('zoom far')
            set(() => {
                return {guiIntroPhase: 'far'}
            })
        }
    }
}))